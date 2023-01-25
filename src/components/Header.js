import React, { useContext } from "react";
import { HeaderBar, Button } from "../styles/styledHeader";
import { Text } from "../styles/styledBase";
import OrdersContext from '../context/OrdersProvider';
import { View } from "react-native";

const Header = () => {
    const { setIsModal } = useContext(OrdersContext);
    return (
        <HeaderBar>
            <View>
                <Button
                    onPress={() => setIsModal(true)}>
                    <Text fontWeight="bold">Añadir producto </Text>
                </Button>
            </View>
        </HeaderBar>
    );
}

export default Header;