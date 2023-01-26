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

  background: white;
  z-index: 10;
  border-radius: 16px;
  padding: 30px;
  margin-top: 50px;
`

export const ModalBody = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ModalCloseBtn = styled.TouchableOpacity`
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 18px;
  background-color: #FF6E2F;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -7px;
  margin-right: -7px;

`

export const ModalConfirmBtn = styled.TouchableOpacity`
  margin: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #FF6E2F;
  font-weight: 700;
`

export const ModalHeader = styled.View`
    align-items: center;
`
