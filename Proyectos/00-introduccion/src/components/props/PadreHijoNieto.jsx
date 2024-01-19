import { useState } from "react"

const Nieto = (props) => {
    const {counter, handleDecrementCounter, handleIncrementCounter} = props;
    return(
        <div className=" bg-gray-400 p-8 rounded-md text-center">
        <p className = "text-2x1 font-bold md-6">Contador Nieto : {counter}</p>
            <button 
            className="bg-red-500 text-white px-6 py-3 rounded-md 
            hover: bg-red-800 mx-3
            "
            onClick={() =>handleIncrementCounter(1)}
            >Incrementar</button>

            <button 
            className="bg-red-500 text-white px-6 py-3 rounded-md 
            hover: bg-red-800 mx-3
            "
            onClick={handleDecrementCounter}
            >Decrementar</button>
        
        </div>
    );
}

const Hijo = (props) => {
    const {counter, handleDecrementCounter, handleIncrementCounter} = props;
    
    return(
        <div className=" bg-gray-400 p-8 rounded-md text-center">
        <p className = "text-2x1 font-bold md-6">Contador Hijo : {counter}</p>
            <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-md 
            hover: bg-blue-800 mx-3
            "
            onClick={() =>handleIncrementCounter(1)}
            >Incrementar</button>

            <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-md 
            hover: bg-blue-800 mx-3
            "
            onClick={handleDecrementCounter}
            >Decrementar</button>

            <Nieto 
            counter={counter}
            handleIncrementCounter={() =>handleIncrementCounter(1)}
            handleDecrementCounter={handleDecrementCounter}
            />
        
        </div>
    );
}

function PadreHijoNieto() {
    const [counter, setCounter] = useState(0);

    function handleIncrementCounter(value){
        setCounter((prev) => prev+value);
    }

    function handleDecrementCounter(){
        setCounter((prev) =>prev-1);
    }
    return(
        <div className=" bg-gray-400 p-8 rounded-md text-center">
        <p className = "text-2x1 font-bold md-6">Contador Padre : {counter}</p>
            <button 
            className="bg-green-500 text-white px-6 py-3 rounded-md 
            hover: bg-green-800 mx-3
            "
            onClick={() =>handleIncrementCounter(1)}
            >Incrementar</button>

            <button 
            className="bg-green-500 text-white px-6 py-3 rounded-md 
            hover: bg-green-800 mx-3
            "
            onClick={handleDecrementCounter}
            >Decrementar</button>
        
            <Hijo 
            counter={counter}
            handleIncrementCounter={() =>handleIncrementCounter(1)}
            handleDecrementCounter={handleDecrementCounter}
            />

        </div>
    );
}

export default PadreHijoNieto