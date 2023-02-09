


let pokemonRepository = (function (){
    let pokemonList = [
        {
            name: 'Pikachu', 
            height: 40.64, 
            types: ['electric']
        },
        {
            name: 'Bulbasaur', 
            height: 71.12, 
            types: ['grass', 'poison'] 
        },
        {
            name: 'Charizard', 
            height: 60.96, 
            types: ['fire']
        },
        {
            name: 'Squirtle', 
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

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');

        let listPokemon = document.createElement('li');

        //creates buttons that contains pokemon names
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');

        //added event listener
        button.addEventListener('click', function(){
            showDetails(pokemon);
        })

        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);


    }

    function showDetails(pokemon){
        console.log(pokemon);

    }

    return {
        add: add,
        getALL: getALL,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();


pokemonRepository.getALL().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);   
});


