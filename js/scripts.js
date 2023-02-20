


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
          item.types = details.types.map((type) => type.type.name);
        }).catch(function (e) {
          console.error(e);
        });
      }
    
    function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
    }

    let modalContainer = document.querySelector('#modal-container');
    function showModal(pokemon){
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
      // let $modalContainer = $("#modal-container");
      
      //clear existing content
      
      //modalHeader.empty();
      modalTitle.empty();
      modalBody.empty();

      
      
      
      


    }

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal container,
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    return {
        add: add,
        getALL: getALL,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();


pokemonRepository.loadList().then(function(){
    pokemonRepository.getALL().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);   
    });
});
    


