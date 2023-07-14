import React, { useContext } from "react";
import {PokeCardContainer,
   ImgContainer,
    PokeImg,
     ButtonsContainer,
      Name,
      Button
    } from "./styled";
import {useNavigate, useParams} from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";


const PokemonCard = (props, isPokedex) => {

    const navigate = useNavigate();
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext);

    const addToPokedex = () => { //essa função vai adicionar o pokemon na pokedex
        const pokeIndex = pokemons.findIndex(
            (item) => item.name === props.pokemon.name
          );
          const newPokemonsList = [...pokemons];
          newPokemonsList.splice(pokeIndex, 1);
          const orderedPokemons = newPokemonsList.sort((a, b) => {
            return a.id - b.id;
          }); //estou ordenando a minha lista, para que ela fique em ordem caso eu remover da pokedex
      
          const newPokedexList = [...pokedex, props.pokemon];
          const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id;
          });
      
          setPokedex(orderedPokedex);
          setPokemons(orderedPokemons)
    }

    const removeFromPokedex = () => {//essa função vai remover o pokemon na pokedex
        const pokeIndex = pokedex.findIndex((item) => item.name === props.pokemon.name)

        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)

        const newPokemonsList = [...pokemons, props.pokemon]

        setPokedex(newPokedexList)
        setPokemons(newPokemonsList)
    }

    const goToPokemon = (name) => {
        navigate(`/pokemon/${name}`)
    }

   
   return (
       <PokeCardContainer>
           <ImgContainer>
               <PokeImg
               src={props.pokemon && props.pokemon.sprites.front_default}
               alt={props.pokemon.name}
               />
             <Name>{props.pokemon.name}</Name>
           </ImgContainer>
           <ButtonsContainer>
           <Button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
             {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </Button>
               <Button onClick={() => goToPokemon(props.pokemon.name, props.isPokedex)}> 
                   Ver detalhes
                   </Button>
           </ButtonsContainer>
       </PokeCardContainer>
    )
};

export default PokemonCard;

/* os props.isPokedex era para mostrar os detalhes dos pokémons
caso eu quisesse ver o detalhe na tela da pokedex
*/