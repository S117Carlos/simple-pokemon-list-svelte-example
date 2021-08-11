
import { writable } from "svelte/store";
import axiosAPI from "../../services/axios"
export const pokemons = writable([]);
import axios from "axios";

const fetchPokemonData = (pokemon) => axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.id);

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
};

export const fetchPokemons = async (limit = 150) =>{
    const dataset =await axiosAPI.get(`pokemon?limit=${limit}`);
    let pokeset = dataset.results.map((pokemon,index) => ({
        name: pokemon.name,
        id: index +1
    }));
    let allData = [];
    // Get pokemon details one by one in sync in order to keep the same order of data
    const getDetails = async () => {
        await asyncForEach(pokeset, async (pokemon) => {
          let res = await fetchPokemonData(pokemon);
          let poke = {
              ...pokemon,
              img: res.data.sprites.front_default,
              types: res.data.types.map(x => ({text: x.type.name, color: x.type.name + '-label'}))
          };
          allData.push(poke);
          return poke;
        });
    };
    
    await getDetails();
    pokemons.set(allData);
    return allData;
};
