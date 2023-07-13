import React, {useEffect, useState} from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);


    useEffect(() => {
        getPokemonNames();
    }, [])

    /*Este useEffect vai pegar o url dos 20 pokemons e vou conseguir pegar todos os itens de cada um */
    useEffect(() => {
        const newList = [];
        pokemonNames.forEach((item) => {
          axios
            .get(`${BASE_URL}/pokemon/${item.name}`)
            .then((response) => {
              newList.push(response.data);
              if (newList.length === 20) {
                const orderedList = newList.sort((a, b) => {
                  return a.id - b.id;
                });
                setPokemons(orderedList);
              }
            })
            .catch((error) => console.log(error.message));
        });
      }, [pokemonNames]);


    //essa função vai pegar o pokémonName
    const getPokemonNames = () => {
        axios
          .get(`${BASE_URL}/pokemon?limit=20`)
          .then((response) => {
            setPokemonNames(response.data.results);
          })
          .catch((error) => console.log(error.message));
      };

    //o objeto data vai ser responsável por armazenar os estados e enviar eles para todas as telas.
    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
      };
    
      return (
        <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
      );

};

export default GlobalState;