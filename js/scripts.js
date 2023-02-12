


let pokemonRepository = (function (){
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
        typeof pokemon === "object"&&
        "name" in pokemon
        ){
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
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
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }


    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
    
    function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        console.log(pokemon);
    });
    }

    return {
        add: add,
        getALL: getALL,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();


pokemonRepository.loadList().then(function(){
    pokemonRepository.getALL().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);   
    });
});
    


