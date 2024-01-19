import { useState } from "react";

const Contador = () =>{

    const [counter, setCounter] = useState(0);

    function handleIncrementCounter(value){
        setCounter((prev) => prev+value);
    }

    function handleDecrementCounter(){
        setCounter((prev) =>prev-10);
    }
    return(
        <>
        <h1>Ejemplo básico de contador</h1>
        <h2>{counter}</h2>
        <button onClick={() =>handleIncrementCounter(1)}>Incrementar</button>
        <button onClick={handleDecrementCounter}>Decrementar</button>
        </>
    );
};

export default Contador