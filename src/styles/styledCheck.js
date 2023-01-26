import styled from "styled-components/native";

export const ChecksContainer = styled.View`
 display: flex;
 flex: 1;
 flex-wrap: wrap;
 padding: 20px;
`
export const Line = styled.View`
    margin: 10px 0px 10px 0px;
    height: 1px;
    background-color: #000;
    align-self: stretch;
`

export const CheckContainer = styled.View`
  background-color: #fff;
  z-index: 0;
  width: 100%;
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
    padding-bottom: 5px;
`