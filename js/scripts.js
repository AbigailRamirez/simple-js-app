
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
        let pokemonList = $('.pokemon-list');
        let listPokemon = $('<li class="group-list-item"></li>');

        //creates buttons that contains pokemon names
        let button = $(`<button type="button" class="pokemon-button btn btn-primary"
          data-toggle="modal" data-target="#pokeModal">${pokemon.name}</button>`);


        listPokemon.append(button);
        pokemonList.append(listPokemon);

        //added event listener
        button.on('click', function(){
          showDetails(pokemon);
        });

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
          item.imageUrlFront = details.sprites.front_default;
          item.imageUrlBack = details.sprites.back_default;
          item.height = details.height;
          item.weight = details.weight;
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

      
      //creating name element inside modal content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");

     //creating name element inside modal content
      let imageElementFront = $('<img class="modal-img" style="width:50%">');
      imageElementFront.attr("src", pokemon.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width:50%">');
      imageElementBack.attr("src", pokemon.imageUrlBack);

      //creating element for height in modal content
      let heightElement = $("<p>" + "height: " + pokemon.height + "</p>");
      
      //creating element for width in modal content
      let weightElement = $("<p>" + "weight: " + pokemon.weight + "</p>");

      //creating element for type in modal content
      let typesElement = $("<p>" + "types: " + pokemon.types + "</p>");

      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);  
      
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
    


