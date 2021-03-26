/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/fetchPokemon.js":
/*!*********************************!*\
  !*** ./modules/fetchPokemon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCardPokemon)\n/* harmony export */ });\nfunction fetchCardPokemon() {\r\n  const btnRandomPokemon = document.querySelector(\"[data-icon-random]\");\r\n  const btnSearchPokemon = document.querySelector(\"[data-search]\");\r\n  const valueNamePokemon = document.querySelector(\"#namePokemon\");\r\n  const elementPokemon = document.querySelector(\".pokemon\");\r\n  const urlApiPokemon = \"https://pokeapi.co/api/v2/pokemon/\";\r\n  const urlImgPokemon = \"https://pokeres.bastionbot.org/images/pokemon/\";\r\n\r\n  const colors = {\r\n    fire: \"#ffb9a7\",\r\n    grass: \"#b4fcb9\",\r\n    electric: \"#fff2af\",\r\n    water: \"#b5baff\",\r\n    ground: \"#fddab6\",\r\n    rock: \"#ffffcb\",\r\n    ghost: \"#c9b8ce\",\r\n    ice: \"#cceaff\",\r\n    fairy: \"#f5cdfc\",\r\n    poison: \"#c2fdce\",\r\n    bug: \"#ffce89\",\r\n    dragon: \"#97b3e6\",\r\n    psychic: \"#eaeda1\",\r\n    flying: \"#f3dede\",\r\n    fighting: \"#fafdc8\",\r\n    normal: \"#ecd6d6\",\r\n  };\r\n\r\n  // cria elementos html, com tag, text e class\r\n  const createElement = (_element, _text, _class) => {\r\n    const newElement = document.createElement(_element);\r\n    newElement.innerText = _text;\r\n    newElement.classList.add(_class);\r\n    return newElement;\r\n  };\r\n  // funcao para informar erro\r\n  const errMessage = () => {\r\n    elementPokemon.classList.add(\"err\");\r\n    elementPokemon.innerText = \"pokemon nao encotrado\";\r\n    elementPokemon.style.backgroundColor = \"red\";\r\n  };\r\n\r\n  // faz a busca pelo pokemon\r\n  const fetchPokemon = async (nameOrIdPokemon) => {\r\n    const response = await fetch(urlApiPokemon + nameOrIdPokemon);\r\n    return response.status !== 404 ? response.json() : errMessage();\r\n  };\r\n\r\n  // cria os cards de pokemons\r\n  const createCardPokemon = async (namePokemon) => {\r\n    elementPokemon.innerHTML = \"\";\r\n    try {\r\n      const resultPokemon = await fetchPokemon(namePokemon);\r\n      if (!!resultPokemon === true) {\r\n        const { name } = resultPokemon;\r\n        const { id } = resultPokemon;\r\n\r\n        const typeName = resultPokemon.types[0].type.name;\r\n        const allTypesPokemon = resultPokemon.types;\r\n        // const idPokemon = resultPokemon.id;\r\n\r\n        const idPokemon = createElement(\"span\", \"#\" + id, \"id-pokemon\");\r\n        const titlePokemon = createElement(\"h2\", name, \"name-pokemon\");\r\n        const imgPokemon = document.createElement(\"img\");\r\n        imgPokemon.src = `${urlImgPokemon}${id}.png`;\r\n        imgPokemon.setAttribute(\"alt\", name);\r\n\r\n        // coloca em uma array os types do pokemon, depois transformas os types em uma única string com um separadaor entre eles\r\n        const innerTextTipesPokemon = allTypesPokemon\r\n          .map((element) => element.type.name)\r\n          .join(\" | \");\r\n\r\n        const elementTextType = createElement(\r\n          \"span\",\r\n          `Type: ${innerTextTipesPokemon}`,\r\n          \"type\"\r\n        );\r\n        elementPokemon.style.backgroundColor = `${colors[typeName]}`;\r\n        elementPokemon.appendChild(titlePokemon);\r\n\r\n        elementPokemon.appendChild(idPokemon);\r\n        elementPokemon.appendChild(imgPokemon);\r\n        elementPokemon.appendChild(elementTextType);\r\n      }\r\n    } catch (err) {\r\n      errMessage();\r\n    }\r\n  };\r\n\r\n  const handleSeachPokemon = (e) => {\r\n    e.preventDefault();\r\n    const namePokemon = valueNamePokemon.value.toLowerCase();\r\n    elementPokemon.innerHTML = \"\";\r\n    createCardPokemon(namePokemon);\r\n  };\r\n\r\n  // sorteia um pokemon dentre 1 e 150\r\n  const handleRandomPokemon = () => {\r\n    const randomNumber = Math.floor(Math.random() * 150);\r\n    if (!!randomNumber === true) {\r\n      createCardPokemon(randomNumber);\r\n    }\r\n  };\r\n\r\n  // adiciona eventos aos interáveis\r\n  btnRandomPokemon.addEventListener(\"click\", handleRandomPokemon);\r\n  btnSearchPokemon.addEventListener(\"click\", handleSeachPokemon);\r\n\r\n  function init() {\r\n    handleRandomPokemon();\r\n  }\r\n  init();\r\n}\r\n\n\n//# sourceURL=webpack://pokedex/./modules/fetchPokemon.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fetchPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchPokemon */ \"./modules/fetchPokemon.js\");\n// prettier-ignore\r\n\r\n\r\n(0,_modules_fetchPokemon__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://pokedex/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;