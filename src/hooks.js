import { useState } from "react";

export default function usePokemonAPI() {
  const [pokemon, setPokemon] = useState(undefined);
  async function getPokemonInfo(name) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    const response = await fetch(URL);
    if (!response.ok) {
      alert("Not a Valid Pokemon!");
      return;
    }
    const data = await response.json();
    setPokemon(data);
  }
  return [pokemon, getPokemonInfo];
}
