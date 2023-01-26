import React, { useState } from "react";
import { CheckContainer, CheckHeader, CheckFooter, CheckBody, Line } from "../styles/styledCheck";
import { View } from "react-native";
import { Text } from "../styles/styledBase";
import CheckBox from "react-native-check-box";

const Check = (props) => {
    const [isTip, setIsTip] = useState(false);

    return (
        <CheckContainer style={{ elevation: 1 }}>
            <CheckHeader>
                <Text fontWeight={700} color={"#000"} fontSize={"20px"}>{props.name}</Text>
            </CheckHeader>
            <CheckBody >
                {props.products.map(item => (
                    <View
                        key={Math.random()}>
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "normal" }}>{item.name} ${item.price}</Text>
                    </View>
                ))}
                <Line />
                <Text color={"#000"}>Total: {props.total}</Text>
                {isTip && <Text color={"#000"}>Total con propina: {props.total + (props.total * 0.10)}</Text>}
            </CheckBody>
            <CheckFooter>
                <Text fontWeight={700} color={"#000"} fontSize={"16px"}>Añadir propina</Text>
                <CheckBox checkBoxColor="black" onClick={() => setIsTip(!isTip)} isChecked={isTip} ></CheckBox>
            </CheckFooter>
        </CheckContainer>
    );
}

export default Check;