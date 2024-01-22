// Llamada a la API de pokeapi.co
const pokeApi = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error dentro del fetch");
        }
        const data = await response.json();
        return data.results;
    }
    catch (err) {
        console.error(err);
        throw new Error("Error fetching");
    }
}

export default pokeApi;