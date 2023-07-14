import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import {PokeListContainer, Search, Label, H3} from "./styled";
import { useNavigate } from "react-router-dom";

const PokemonListScreen = () => {
    const [inputName, setInputName] = useState("");
    const { pokemons } = useContext(GlobalStateContext);

    const onChangeName = (event) => { //aqui vai pegar o valor que será digitado para fazer a busca pelo nome
        setInputName(event.target.value)
    }

    let pokeFilter = pokemons.filter((pokemon) => {
        if (pokemon.name.toLowerCase().includes(inputName.toLowerCase())) {
            return true 
        } else {
            return false
        }
    })

    const navigate = useNavigate();

    const clickToNavigate = () => {
        return navigate("/pokedex")
    }

    return (
        <>
            <Header 
            title={"Lista de Pokémons"}
            leftButtonFunction={() => clickToNavigate()}
            />
            <form >
            <Label>
              <H3>Busca:</H3> 
                <Search
                  type="text"
                  value={inputName}
                  onChange={onChangeName}
                  placeholder="Nome do pokémon"
                />
            </Label>
        </form>
            <PokeListContainer>
        {pokeFilter &&
          pokeFilter.map((poke) => {
            return <PokemonCard key={poke.name} pokemon={poke} />;
          })}
      </PokeListContainer>
        </>
    )
};

export default PokemonListScreen;