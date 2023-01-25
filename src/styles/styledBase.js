import styled from "styled-components/native";



export const Input = styled.TextInput`
  margin-top: 20px;
  background-color: #B4D4FF;
  border-radius: 10px;
  font-weight: bold;
  color: black;
  height: 40px;
  width: ${props => props.width};
  padding-left: 20px;
  &::placeholder {
    color: black;
    font-weight: normal;
  }
`

export const Text = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : "14px"};
  color: ${props => props.color ? props.color : "white"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "normal"};
`