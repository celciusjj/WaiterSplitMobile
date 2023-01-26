import styled from "styled-components/native";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "gray"
  })`
  margin-top: 20px;
  background-color: #B4D4FF;
  border-radius: 10px;
  color: black;
  height: 40px;
  width: ${props => props.width};
  padding-left: 20px;
`

export const FloatingButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;   
  border-radius: 30px;            
  background-color: #FF6E2F;                                    
  position: absolute;                                   
  bottom: 30px;                                            
  right: 30px;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : "14px"};
  color: ${props => props.color ? props.color : "white"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "normal"};
`