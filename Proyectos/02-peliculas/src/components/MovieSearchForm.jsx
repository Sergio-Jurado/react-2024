import {  useState } from "react";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

const MovieSeachForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const apiToken = import.meta.env.VITE_API_KEY;
  const apiEndPoint="https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" + apiToken;
    console.log(apiEndPoint);
  const { data, error, loading } = useDataApi(apiEndPoint);
  console.log(data,error,loading);
 
 function handleSearch(e) {
  e.preventDefault();
  const searchTerm= setSearchQuery(e.target.value.toLowerCase().trim())
  if(e.target.value.toLowerCase().trim() === ""){
    setFilteredMovie([]);
  } else {
    const filteredResults = data?.results.filter((movie)=>(movie.title.toLowerCase().includes(searchTerm)))
    setFilteredMovie(filteredResults || []);
  }
 }
 

 
 
  return (
    <>
    <div className="flex flex-col items-center justify-center my-4">
      <form  className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center">
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="Buscar Películas"
          />

      </form>
    </div>
    <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
    {loading && <Spinner />}
    {error && <p className="text-2x1 font-bold">Error acediendo a MovieDB</p>}
    {(searchQuery ? filteredMovie: data?.results || []).map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
    </div>

    </>
  );
};

export default MovieSeachForm;