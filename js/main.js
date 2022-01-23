var elPokemonList = document.querySelector(`.pokemon__list`);
var elPokemonForm = document.querySelector(`.pokemon__form`);
var elPokemonName = document.querySelector(`.pokemon__input[name="name"]`);
var elPokemonType = document.querySelector(`.pokemon__input[name="type"]`);
var elPokemonWeight = document.querySelector(`.pokemon__input[name="weight"]`);
var elPokemonPhoto = document.querySelector(`.pokemon__input[name="img"]`);

function renderPokemon(pokemonArray = [], element) {
    element.innerHTML = null;

    for (var i = 0; i<pokemonArray.length; i++) {

        var item = document.createElement(`li`);
        var photo = document.createElement(`img`);
        var heading = document.createElement(`h2`);
        var text = document.createElement(`p`);
        var weight = document.createElement(`p`);
        var age = document.createElement(`p`);

        item.setAttribute(`class`, `pokemon__item col-lg-3 col-md-4 col-12`);
        photo.setAttribute(`class`, `pokemon__photo d-block pokemon__img mx-auto mb-3`);
        photo.setAttribute(`src`, pokemonArray[i].img);
        photo.setAttribute(`alt`, pokemonArray[i].name + ` named pokemon`);
        photo.setAttribute(`width`, `157`);
        photo.setAttribute(`height`, `157`);
        heading.setAttribute(`class`, `pokemon__heading`);
        text.setAttribute(`class`, `pokemon__text`);
        weight.setAttribute(`class`, `weight__pokemon`);
        age.setAttribute(`class`, `age__pokemon`);

        heading.textContent = pokemonArray[i].name;
        text.textContent = pokemonArray[i].type.join(`, `);
        weight.textContent = pokemonArray[i].weight;


        item.appendChild(photo);
        item.appendChild(heading);
        item.appendChild(text);
        item.appendChild(weight);
        item.appendChild(age);
        element.appendChild(item);
    }
}

function newPokemon(name, img, type, weight, pokemonArray) {
    var newName = name.value.trim();
    var newphoto = img.value.trim();
    var newType = type.value.trim().split(` `);
    var newWeight = weight.value;

    var newPokemonArray = {
        name: newName,
        img: newphoto,
        type: newType,
        weight: newWeight
    };

    pokemonArray.unshift(newPokemonArray);

}

var renderNewPokemon = function (evt) {
    evt.preventDefault();

    newPokemon(elPokemonName,
        elPokemonPhoto,
        elPokemonType,
        elPokemonWeight,
        pokemons
    );

    renderPokemon(pokemons, elPokemonList);

    elPokemonName.value = null;
    elPokemonPhoto.value = null;
    elPokemonType.value = null;
    elPokemonWeight.value = null;
  
};

renderPokemon(pokemons, elPokemonList);


elPokemonForm.addEventListener(`submit`, renderNewPokemon)

