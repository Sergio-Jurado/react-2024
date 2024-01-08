// Imports

// Variables globales

const Prueba = () => {
    // Variables locales
    const nombre = "Sergio Jurado Trillo";
    const edad = 21;
    const array = ["España", "Suecia", "Irlanda"];
    const Objeto ={
        nombre: "Jose",
        edad: 25
    };
    const elemnetoJSX=(<p>Este es el elemento de JSX</p>);

    // Declaración de los HOOKS

    // Funciones 
    function sumar (n1, n2){
        return n1 + n2;
    }

  return (
    // Aquello que quiero renderizar (JSX)
    // Siempre que queramos usar javaScript hay que englobarlo en {}
    <>
        <div>
            <p>Tu nombre es: {nombre}, tienes {edad} años</p>
            <p>Sumo los números 5+7 = {sumar(5,7)}</p>
            <p>True -- {true.toString()}</p>
            <div>
                <p>objeto, nombre {Objeto.nombre} y edad {Objeto.edad}</p>
            </div>
            {elemnetoJSX}
            <ul>
                {array.map((pais) => <li key={pais}>{pais}</li>)}
            </ul>
        </div>
    </>
    
  )
}

export default Prueba