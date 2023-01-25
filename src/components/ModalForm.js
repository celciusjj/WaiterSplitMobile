import React, { useState, useContext, useEffect } from "react";
import { ModalItem, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody, ModalConfirmBtn } from "../styles/styledModal";
import Icon from "react-native-vector-icons/FontAwesome"
import RowIcon from "react-native-vector-icons/MaterialIcons"
import { Input } from "../styles/styledBase";
import { foodProducts } from "../utils/mocks";
import OrdersContext from '../context/OrdersProvider';
import { Text } from "../styles/styledBase";
import { View, TouchableOpacity, Image } from "react-native";

const Modal = () => {
    const { orders, setOrders, setIsModal, isModal } = useContext(OrdersContext);
    const [client, setClient] = useState("");
    const [productSelected, setProductSelected] = useState(foodProducts[0]);
    const [products] = useState(foodProducts);
    const [productName, setProductName] = useState(foodProducts[0].name);
    const [counter, setCounter] = useState(0);

    console.log(isModal)

    useEffect(() => {
        let newProduct = foodProducts[counter];
        setProductSelected(newProduct)
        setProductName(newProduct.name)
    }, [counter])

    const handleNextProduct = () => {
        if (counter === products.length - 1) {
            setCounter(0)
        } else {
            setCounter(prevCounter => prevCounter + 1);
        }
    }

    const handlePreviousProduct = () => {
        if (counter === 0) {
            setCounter(products.length - 1)
        } else {
            setCounter(prevCounter => prevCounter - 1);
        }
    }

    const onChangeProductInput = (e) => {
        setProductName(e.target.value)
        let productSelected = products.filter(item => (item.name).toLowerCase() === (e.target.value).toLowerCase());
        if (productSelected.length > 0) setProductSelected(productSelected[0]);
    }

    const onPressButton = () => {
        if (client !== "") {
            let dataClient = orders[client];
            let total = productSelected.price;
            if (dataClient) {
                total += dataClient.products.map(item => item.price).reduce((acc, amount) => acc + amount)
            }
            const data = {
                ...orders,
                [client]: {
                    products: dataClient ? [...dataClient.products, productSelected] : [productSelected],
                    total,
                }
            }
            setOrders(data)
        }
    }

    return (
        isModal &&
        <ModalContainer>
            <ModalItem >
                <ModalHeader>
                    <Text fontSize={20} color={"#000"}>Registre el producto</Text>
                </ModalHeader>
                <ModalBody>
                    <Input
                        value={productName}
                        onChange={onChangeProductInput}
                        width={"200px"}
                        placeholder="Ingrese el producto">
                    </Input>

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={handlePreviousProduct}>
                            <RowIcon color={"#000"} name="navigate-before" size={40} />
                        </TouchableOpacity>
                        <Image style={{ width: 100, height: 100, margin: 20 }} source={{ uri: productSelected.url }}></Image>
                        <TouchableOpacity
                            onPress={handleNextProduct}>
                            <RowIcon color={"#000"} name="navigate-next" size={40} />
                        </TouchableOpacity>
                    </View>

                    <Input
                        onChangeText={(e) => setClient(e.toUpperCase())}
                        width={"200px"}
                        placeholder="Nombres y apellidos del cliente">
                    </Input>

                    <ModalConfirmBtn
                        onPress={onPressButton}>
                        <Text fontWeight="bold">Confirmar</Text>
                    </ModalConfirmBtn>

                </ModalBody>

                <ModalCloseBtn
                    onPress={() => setIsModal(false)}>
                    <Text><Icon style={{ marginBottom: "-3px" }} name="close" size={20} /></Text>
                </ModalCloseBtn>

            </ModalItem>

        </ModalContainer >
    );
}

export default Modal;