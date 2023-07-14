import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobaState";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonListScreen from "./screens/PokemonListScreen/PokemonListScreen";
import PokemonDetailScreen from "./screens/PokemonsDetailScreen/PokemonDetailScreen"
import PokedexScreen from "./screens/PokedexScreen/PokedexScreen"

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonListScreen/>
  },
  {
    path:"/pokemon/:name",
    element:<PokemonDetailScreen/>
  }, {
    path:"/pokedex",
     element:<PokedexScreen/>
  }
]);

const App = () => {
  return (
    <GlobalState>
      <RouterProvider router={router}/>
    </GlobalState>
  );
}

export default App;