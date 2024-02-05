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
    <div className={`w-80 h-100  rounded overflow-hidden shadow-md bg-red-100 m-8 flex flex-col justify-center items-center transform ${isDeleting ? "rotateY-180 scale-0":"rotateY-0 scale-100"} transition-transform duration-500 ease-in-out`}>
        <div className="flex flex-col w-full">
            <img src={pokemon.showdown.front_default} alt={pokemon.name} className=" h-auto mx-auto mt-2" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-center">{pokemon.name}</h2>
            </div>
            <div className="flex justify-center">
                {pokemon.types.map((type) =>(<div>
                    <p className="mr-5">{type.type.name}</p>
                    </div>))}
            </div>
            <div className="flex justify-center h-15">
                <button className=" bg-red-500 text-white px-3 py-1 rounded-md mx-auto hover:bg-red-800 focuss:outline-none" onClick={handleClickDelete}> Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default PokemonCard