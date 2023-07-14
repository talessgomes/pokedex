import styled from "styled-components";


export const HeaderContainer = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  background-color: red;
`;

export const LeftHeaderButton = styled.button`
  position: absolute;
  left: 10px;
  width: 120px;
  height: 39px;
  background: #F0E921;
  color: #000000;
  font-size: 16px;
  border: none;
  border-radius: 360px;

  font-family: Wendy One;
  font-size: 17px;
  border: none;
  &:hover{
    box-shadow: 5px 10px 18px #EEDD82;
    cursor: pointer;
  }
`;

export const RightHeaderButton = styled.button`
  position: absolute;
  right: 10px;
  width: 120px;
  height: 39px;
  background: #F0E921;
  color: #000000;

  font-family: Wendy One;
  font-size: 17px;
  border: none;
  border-radius: 360px;
    &:hover{
      box-shadow: 5px 10px 18px #EEDD82;
      cursor: pointer;
    }
`;
