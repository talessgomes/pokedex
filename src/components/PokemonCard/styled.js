import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeCardContainer = styled.div `
    height: 30vh;
    width: 250px;
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: 90% 10%;
`;

export const ImgContainer = styled.div `
    background: ${backgroundCard};
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
`

export const PokeImg = styled.img `
    height: 60%;
`;

export const ButtonsContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Name = styled.p `
    width: 96px;
    height: 21px;
    left: 513px;

    font-family: Wendy One;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: black;
`

export const Button = styled.button `
    width: 120px;
    height: 39px;
    background: #FA2C11;
    color: #FFFFFF;


    font-family: Wendy One;
    font-size: 17px;
    border: none;
    border-radius: 360px;
    &:hover{
        box-shadow: 5px 10px 18px gray;
        cursor: pointer;
    }
`