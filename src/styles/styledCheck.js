import styled from "styled-components/native";

export const ChecksContainer = styled.View`
 display: flex;
 padding: 20px;
`

export const CheckContainer = styled.View`
  background-color: #fff;
  border-radius: 5px;
  z-index: 0;
  position: relative;
  margin-bottom: 20px;
`

export const CheckHeader = styled.View`
    padding: 2px;
    background-color: #009BFF;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CheckBody = styled.View`
    margin: 50px 40px 80px 40px;
    align-items: center;
`

export const CheckFooter = styled.View`
    background-color: #009BFF;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-bottom: 5px;
`