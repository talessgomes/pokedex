export const goToPokemonsList = (history) => {
    history.push("/");
}
//essa vai ser a tela inicial.

export const goToPokemonsDetail = (history, name) => {
    history.push(`/pokemon/${name}`);
}
/*
tela do detalhe de cada pokemon
aqui eu vou pegar o nome de pokemon para que ele apareça cada
vez que for clicado no pokemon especifico
*/
export const goToPokedex  = (history) => {
    history.push("/pokedex");
}
//Aqui vai ser a página da lista com os pokemons.