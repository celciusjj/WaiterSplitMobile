import styled from "styled-components/native";

export const ModalContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`

export const ModalItem = styled.View`
  display: flex;
  width: 300px;

  background: white;
  z-index: 10;
  border-radius: 16px;
  padding: 30px;
  margin-top: 50px;
`

export const ModalBody = styled.View`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    img {
        height: 160px;
        width: 160px;
        margin: 20px;
        border-radius: 20px;
    }

    button {
        &:nth-child(1) {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        font-size: 30px;
        }
        &:nth-child(3) {
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        font-size: 30px;
        }
    }
`

export const ModalCloseBtn = styled.TouchableOpacity`

  font-weight: 500;
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  background-color: #FF6E2F;
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;

`


export const ModalConfirmBtn = styled.TouchableOpacity`
  margin: 20px;
  padding: 10px 15px;
  text-align: center;



  border-radius: 10px;
  background-color: #FF6E2F;
  border: 0px;
  font-weight: 700;
`

export const ModalHeader = styled.View`
    background: white;
    align-items: center;
`
