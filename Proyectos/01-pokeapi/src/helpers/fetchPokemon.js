export const fetchPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50";
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch (e) {
        throw new Error("Error fetchingPokemon");
    }
}
export default fetchPokemon;