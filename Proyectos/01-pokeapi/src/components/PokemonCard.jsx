import { useState } from "react";
const PokemonCard = ({pokemon, handleDelete}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    function handleClickDelete(){
        setIsDeleting(true);
        setTimeout(() => {
            handleDelete(pokemon.id);
        }, 500);
    }
  return (
    <div className={`max-w-xs rounded overflow-hidden shadow-md bg-white m-4 flex flex-col justify-center items-center transform ${isDeleting ? "rotateY-180 scale-0":"rotateY-0 scale-100"} transition-transform duration-500 ease-in-out`}>
        <div className="flex flex-col w-full">
            <img src={pokemon.showdown.front_default} alt={pokemon.name} className="w-auto h-auto mx-auto mt-4" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{pokemon.name}</h2>
            </div>
            <div>
                <button className=" bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-800 focuss:outline-none" onClick={handleClickDelete}> Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default PokemonCard