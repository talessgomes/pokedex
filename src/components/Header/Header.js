import React from "react";
//import { useNavigate } from 'react-router-dom';
import {HeaderContainer, LeftHeaderButton, RightHeaderButton} from "./styled"

const Header = ({leftButtonFunction, title, showRightButton}) => {
    //const navigate = useNavigate();

   /* const clickToNavigate = () => {
        navigate("/pokedex")
    }*/

    const leftButtonTitle = () => {
        switch (title) {
          case "Lista de Pokémons":
            return "Ir para Pokedex";
          case "Pokédex":
            return "Voltar para lista de pokemons";
          default:
            return "Voltar";
        }
      };
    
      return (
        <HeaderContainer>
          <LeftHeaderButton onClick={leftButtonFunction}>
            {leftButtonTitle()}
          </LeftHeaderButton>
          <h1>Lista de Pokémons</h1>
            <RightHeaderButton>
              Ir para pokedex
            </RightHeaderButton>
        </HeaderContainer>
      );
    };

export default Header;