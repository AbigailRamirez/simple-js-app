


let pokemonRepository = (function (){
    let pokemonList = [
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getALL(){
        return pokemonList;
    }

    return {
        add: add,
        getALL: getALL
    };
})();

//before forEach() loop
/*
let pokedex = "";
for (i=0; pokemonList[i]; i++){
    pokedexReg= `${pokedex} ${pokemonList[i].name} ( height: ${pokemonList[i].height}cm)<br><br> ` ;
    pokedexBig= `${pokedex} ${pokemonList[i].name} ( height: ${pokemonList[i].height}cm) - Wow, that's big! <br><br> ` ;
    if (pokemonList[i].height < 65.0){
        document.write(pokedexReg);
    }else {
        document.write(pokedexBig);
 */

// replacing for loop with forEach() loop

pokemonList.forEach(function(pokemon){
    if (pokemon.height >= 60){
        document.write(pokemon.name + " (height: " + pokemon.height + "cm) - Wow, that's big!!!" + "<br>")
    } else {
        document.write(pokemon.name + " (height: " + pokemon.height + "cm)" + "<br>")
    }
});

pokemonRepository.getALL().forEach(function(pokemon){
    document.write(pokemon.name + pokemon.height);
});


