export default function fetchCardPokemon() {
  const btnRandomPokemon = document.querySelector("[data-icon-random]");
  const btnSearchPokemon = document.querySelector("[data-search]");
  const valueNamePokemon = document.querySelector("#namePokemon");
  const elementPokemon = document.querySelector(".pokemon");
  const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/";
  const urlImgPokemon = "https://pokeres.bastionbot.org/images/pokemon/";

  const colors = {
    fire: "#ffb9a7",
    grass: "#b4fcb9",
    electric: "#fff2af",
    water: "#b5baff",
    ground: "#fddab6",
    rock: "#ffffcb",
    ghost: "#c9b8ce",
    ice: "#cceaff",
    fairy: "#f5cdfc",
    poison: "#c2fdce",
    bug: "#ffce89",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f3dede",
    fighting: "#fafdc8",
    normal: "#ecd6d6",
  };

  // cria elementos html, com tag, text e class
  const createElement = (_element, _text, _class) => {
    const newElement = document.createElement(_element);
    newElement.innerText = _text;
    newElement.classList.add(_class);
    return newElement;
  };
  // funcao para informar erro
  const errMessage = () => {
    elementPokemon.classList.add("err");
    elementPokemon.innerText = "pokemon nao encotrado";
    elementPokemon.style.backgroundColor = "red";
  };

  // faz a busca pelo pokemon
  const fetchPokemon = async (nameOrIdPokemon) => {
    const response = await fetch(urlApiPokemon + nameOrIdPokemon);
    return response.status !== 404 ? response.json() : errMessage();
  };

  // cria os cards de pokemons
  const createCardPokemon = async (namePokemon) => {
    elementPokemon.innerHTML = "";
    try {
      const resultPokemon = await fetchPokemon(namePokemon);
      if (!!resultPokemon === true) {
        const { name } = resultPokemon;
        const { id } = resultPokemon;

        const typeName = resultPokemon.types[0].type.name;
        const allTypesPokemon = resultPokemon.types;
        // const idPokemon = resultPokemon.id;

        const idPokemon = createElement("span", "#" + id, "id-pokemon");
        const titlePokemon = createElement("h2", name, "name-pokemon");
        const imgPokemon = document.createElement("img");
        imgPokemon.src = `${urlImgPokemon}${id}.png`;
        imgPokemon.setAttribute("alt", name);

        // coloca em uma array os types do pokemon, depois transformas os types em uma única string com um separadaor entre eles
        const innerTextTipesPokemon = allTypesPokemon
          .map((element) => element.type.name)
          .join(" | ");

        const elementTextType = createElement(
          "span",
          `Type: ${innerTextTipesPokemon}`,
          "type"
        );
        elementPokemon.style.backgroundColor = `${colors[typeName]}`;
        elementPokemon.appendChild(titlePokemon);

        elementPokemon.appendChild(idPokemon);
        elementPokemon.appendChild(imgPokemon);
        elementPokemon.appendChild(elementTextType);
      }
    } catch (err) {
      errMessage();
    }
  };

  const handleSeachPokemon = (e) => {
    e.preventDefault();
    const namePokemon = valueNamePokemon.value.toLowerCase();
    elementPokemon.innerHTML = "";
    createCardPokemon(namePokemon);
  };

  // sorteia um pokemon dentre 1 e 150
  const handleRandomPokemon = () => {
    const randomNumber = Math.floor(Math.random() * 150);
    if (!!randomNumber === true) {
      createCardPokemon(randomNumber);
    }
  };

  // adiciona eventos aos interáveis
  btnRandomPokemon.addEventListener("click", handleRandomPokemon);
  btnSearchPokemon.addEventListener("click", handleSeachPokemon);

  function init() {
    handleRandomPokemon();
  }
  init();
}
