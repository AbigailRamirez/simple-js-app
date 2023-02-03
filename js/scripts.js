pokemonList = [
    {
        name: 'pikachu', 
        height: 40.64, 
        types: ['electric']
    },
    {
        name: 'bulbasaur', 
        height: 71.12, 
        types: ['grass', 'poison'] 
    },
    {
        name: 'charizard', 
        height: 60.96, 
        types: ['fire']
    },
    {
        name: 'squirtle', 
        height: 50.8, 
        types: ['water']
    }
];

let pokedex = "";
for (i=0; pokemonList[i]; i++){
    pokedexReg= `${pokedex} ${pokemonList[i].name} ( height: ${pokemonList[i].height}cm)<br><br> ` ;
    pokedexBig= `${pokedex} ${pokemonList[i].name} ( height: ${pokemonList[i].height}cm) - Wow, that's big! <br><br> ` ;
    if (pokemonList[i].height < 65.0){
        document.write(pokedexReg);
    }else {
        document.write(pokedexBig);
    }
}
