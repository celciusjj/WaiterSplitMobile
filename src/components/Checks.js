import React, { useContext } from "react";
import OrdersContext from "../context/OrdersProvider";
import Check from "./Check";
import { ChecksContainer } from "../styles/styledCheck";
import { ScrollView } from "react-native";

const Checks = () => {
    const { orders } = useContext(OrdersContext);
    return (
        <ScrollView>
            <ChecksContainer>
                {
                    Object.keys(orders).map(item => (
                        <Check
                            key={item}
                            products={orders[item].products}
                            name={item}
                            total={orders[item].total}
                        />
                    ))
                    }
            </ChecksContainer>
        </ScrollView>
    );
}

export default Checks;