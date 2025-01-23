
const POKEMON_PAGES = 20;
const POKEMON_TOTAL = 30;

(async() => {
    const fs = require('fs');
    const ids = Array.from({ length: POKEMON_PAGES }, (_, i) => i);
    const pages = ids.map(id => `/ssr/pokemons/page/${ id }`);
    const pokemonNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ POKEMON_TOTAL }`).then(response => response.json());
    const names = pokemonNames?.results?.map(pokemon => `/ssr/pokemons/${ pokemon.name }`);
    const fileContent = [...pages, ...names].join('\n');

    console.log(fileContent);
    fs.writeFileSync('routes.txt', fileContent);
})();