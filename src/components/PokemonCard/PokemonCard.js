import React from "react";
import {PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer, Name} from "./styled";
import { goToPokemonsDetail } from "../../routes/coordinator";
import {useNavigate} from "react-router-dom";
const PokemonCard = (props) => {
    const navigate = useNavigate();
  



    const clickToNavigate = (name) => {
         navigate(`/pokemon/${name}`)
     }

    /*Ao desestruturar a prop, o */
    
    return (
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg
                src={props.pokemon && props.pokemon.sprites.front_default}
                alt={props.pokemon && props.pokemon.name}
                />
              <Name>{props.pokemon && props.pokemon.name}</Name>
            </ImgContainer>
            <ButtonsContainer>
                <button></button>
                <button onClick={() => clickToNavigate(props.pokemon.name)}>detalhe</button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;