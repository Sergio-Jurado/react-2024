import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "./PokeCard";
import Spinner from "./Spinner";
import fetchPokemon from "../helpers/fetchPokemon";

const PokemonsCards = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectPokemon, setSelectPokemon] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            try{
                setTimeout(async () =>{
                    const data = await fetchPokemon()
                    setPokemons(data);
                    console.log(data);
                    setLoading(false);
                }, 3000);
            }
            catch(e){
                setLoading(true);
            }
        }
        fetchData();
    }, [])

  return (
    <div>PokemonsCards</div>
  )
}

export default PokemonsCards