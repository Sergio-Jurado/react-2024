import { useEffect } from "react";
import { useState } from "react";

const UseEffectBasic = () => {
    const [counter, setCounter] = useState(0);


console.log("Inicio");
/*useEffect(() => {
    console.log("useEffect");
})*/
// Cuando cre un useEffect sin el array de depencencias entonces se ejectuará cada vez que cambie cualquier estado

useEffect(() => {
    console.log("useEffect");
}, [counter]);// Array de depencencias vació
// Ejecuta lo que hay dentro solo cuando se monta por primera vez un componente

function handleIncrementCounter(value){
    setCounter((prev) => prev+value);
}


return(
    <>
    <h1>Ejemplo básico de contador</h1>
    <h2>{counter}</h2>
    <button onClick={() =>handleIncrementCounter(1)}>Incrementar</button>
    </>
);
}

export default UseEffectBasic


