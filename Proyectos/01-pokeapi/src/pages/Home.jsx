import { useEffect } from "react"
import { useState } from "react";
import pokeApi from "../api/pokeApi"
import Spinner from "../components/Spinner";
import PokemonCard from "../components/PokemonCard";
const URL = import.meta.env.VITE_API_URL;

const Home = () => {
    // hooks
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    // Funciones
    function handleDelete(id){
        const updatePokemons = pokemons.filter(pokemon => pokemon.id !== id);
        setPokemons(updatePokemons);
    }

    // efectss
  useEffect(() => {
    const fetchData = async () => {
      const data = await pokeApi(URL);
      console.log(data);
      // Ahora voy a crear una variable que contenga la información que necesito de todos los pokemons. 
      // Será una promesa que consumiré cuando todas las promesas hayan sido resueltas
      const pokemonsData = await Promise.all(
        data.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonDetails = await response.json();
            //console.log(pokemonDetails);
            return {
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                order: pokemonDetails.order,
                weight: pokemonDetails.weight,
                showdown: {
                    back_default: pokemonDetails.sprites.other.showdown.back_default,
                    back_shiny: pokemonDetails.sprites.other.showdown.back_shiny,
                    front_default: pokemonDetails.sprites.other.showdown.front_default,
                    front_shiny: pokemonDetails.sprites.other.showdown.front_shiny,
                },
                types: pokemonDetails.types,
                stats: pokemonDetails.stats
            }
        }),
      )
    setPokemons(pokemonsData)
    setLoading(false)
    };
    fetchData();
  }, [])
  return (
    <div className="flex flex-wrap justify-center">
        {loading ? (<Spinner/>) : (
            pokemons.map((pokemon) => (
            <PokemonCard 
                key={pokemon.id} 
                pokemon={pokemon} 
                handleDelete={handleDelete}/>
            ))
        )}
    </div>
  )
}

export default Home