import React, { useContext, useEffect, useState } from "react";
import {PokeInfosContainer,
    ImagesContainer,
    ImgWrapper,
    StatsContainer,
    TitleContainer,
    TypeAndMovesContainer,
    TypesContainer,
    MovesContainer,
    Move,
    ContainerStates,
    StatsName,
    StatsValue
    
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

const PokemonDetailScreen = () => {
    /*Estou desestruturando o name que foi passado no meu Router */
    const [selectedPokemon, setSelectedPokemon] = useState({});
console.log("oi",selectedPokemon);

    const {name} = useParams();
    const {pokemons} = useContext(GlobalStateContext)
console.log('verificando',selectedPokemon)
    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {
            return item.name === name})
            setSelectedPokemon(currentPokemon);
    },[]);

    const navigate = useNavigate();
  

    const backToHome = () => {
        return navigate("/")
    }

    return (
    <div>
        <Header
            title={"Detalhes do Pokemon"}
            leftButtonFunction={() => backToHome()}
            showRightButton
        />
        {selectedPokemon && selectedPokemon.sprites && ( //Estou verificando se existe o objeto e se existe a imagem
        <PokeInfosContainer>
            <ImagesContainer>
                <ImgWrapper src={selectedPokemon.sprites.front_default}/>
                <ImgWrapper src={selectedPokemon.sprites.back_default}/>
            </ImagesContainer>

            <StatsContainer>
                <TitleContainer>Poderes</TitleContainer>
                {selectedPokemon && //trocando
                    selectedPokemon.stats.map((stat) => {
                       return  (
                        <ContainerStates key={stat.stat.name}>
                            <StatsName>{stat.stat.name}</StatsName> 
                            <StatsValue>{stat.base_stat}</StatsValue>
                            <ProgressBar item={stat}/>
                        </ContainerStates>
                       )
                    })
                }
            </StatsContainer>
            <TypeAndMovesContainer>
            <TypesContainer>
              {selectedPokemon &&
                selectedPokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
            </TypesContainer>
            <MovesContainer>
              <TitleContainer>Principais ataques</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.moves.map((move, index) => {
                  return (
                    index < 5 && <Move key={move.move.name}>{move.move.name}</Move>
                  );
                })}
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
};

export default PokemonDetailScreen;