import React, { useContext } from "react";
import { FloatingButton } from "../styles/styledBase";
import Icon from "react-native-vector-icons/FontAwesome";
import OrdersContext from '../context/OrdersProvider';

const AddProductsButton = () => {
    const { setIsModal, isModal } = useContext(OrdersContext);
    return (
        !isModal &&
        <FloatingButton
            onPress={() => setIsModal(true)}
        >
            <Icon name="plus" size={30} color="white" />
        </FloatingButton>
    );
}

export default AddProductsButton;