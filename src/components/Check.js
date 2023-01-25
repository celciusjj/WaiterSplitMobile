import React, { useState } from "react";
import { CheckContainer, CheckHeader, CheckFooter, CheckBody } from "../styles/styledCheck";
import { View } from 'react-native';
import { Text } from "../styles/styledBase";
import CheckBox from 'react-native-check-box'

const Check = (props) => {
    const [isTip, setIsTip] = useState(false);

    return (
        <CheckContainer style={{elevation: 10}}>
            <CheckHeader>
                <Text fontSize={20}>{props.name}</Text>
            </CheckHeader>
            <CheckBody >
                {props.products.map(item => (
                    <View>
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "normal" }}>{item.name} ${item.price}</Text>
                        <Text></Text>
                    </View>
                ))}
                <Text color={"#000"}>Total: {props.total}</Text>
                {isTip && <Text color={"#000"}>Total con propina: {props.total + (props.total * 0.10)}</Text>}
            </CheckBody>
            <CheckFooter>
                <Text fontSize={16}>Añadir propina</Text>
                <CheckBox checkBoxColor="white" onClick={() => setIsTip(!isTip)} isChecked={isTip} ></CheckBox>
            </CheckFooter>
        </CheckContainer>
    );
}

export default Check;