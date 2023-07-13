import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import {PokeListContainer} from "./styled";

const PokemonListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext);
    return (
        <>
            <Header/>
            <PokeListContainer>
        {pokemons &&
          pokemons.map((poke) => {
            return <PokemonCard key={poke.name} pokemon={poke} />;
          })}
      </PokeListContainer>
        </>
    )
};

export default PokemonListScreen;