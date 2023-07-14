import React, { useContext } from "react";
import {PokeListContainer} from "./styled";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";

const PokedexScreen = () => {
    const {pokedex} = useContext(GlobalStateContext);
    const navigate = useNavigate();
     
    const backToHome = () => {
        return navigate("/")
    }
    return(
        <>
        <Header 
            title={"Pokédex"}
            leftButtonFunction={() => backToHome()}
        /> 
            <PokeListContainer>
                {pokedex && //isPokedex vai ser um parametro para quando o texto mudar na pokedex, a função também vai mudar
                 pokedex.map((pokemon) => {
                    return <PokemonCard isPokedex key={pokemon.name} pokemon={pokemon}/>
                 })}
            </PokeListContainer>
        </>
    
    );
};

export default PokedexScreen;