import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
  background: ${backgroundCard};
`;

export const StatsContainer = styled.div`
  background: ${backgroundCard};
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const Move = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  width: fit-content;
  background-color: #ececec;
  border: dashed 1px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  margin-bottom: 18px;
  text-transform: capitalize;
`;


export const ContainerStates = styled.div`
  display: flex;
  align-items: center;
  border-top: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const ContainerTotal = styled(ContainerStates)`
  border-bottom: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const StatsName = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  min-width: 72px;
  height: 33px;
  font-size: 16px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #737373;
`;

export const StatsValue = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 16px;
  min-width: 47px;
  height: 33px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #404040;
`;