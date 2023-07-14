import React from "react";
import { useNavigate } from 'react-router-dom';
import {HeaderContainer, LeftHeaderButton, RightHeaderButton} from "./styled"

const Header = ({title, leftButtonFunction, showRightButton}) => {
  
  const navigate = useNavigate();
  

    const clickToNavigate = () => {
        return navigate("/pokedex")
    }

    const leftButtonTitle = () => { //switch para o title que vai aparecer header e retorno o texto do botão, dependendo do lado
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
          <h1>{title}</h1>
          {showRightButton &&
            <RightHeaderButton onClick={()=> clickToNavigate()}>
            Ir para pokedex
            </RightHeaderButton>
}
        </HeaderContainer>
      );
    };

export default Header;