import { useState } from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
}

const RegistrarFormulario = () => {
    //hooks
    const [formData, setFormData] = useState(initialState);

    // Funciones
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Los datos del usuario son: ", formData);
    }

    function handleInputChange(event){
        event.preventDefault();
        const {name, value} = event.target;
        //console.log("Name: "+name+" value: "+value);
        setFormData({ ...formData, [name]: value});
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
                Nombre:
                <input 
                type="text" 
                name='name' 
                value={formData.name} 
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div>
            <label>
                Email:
                <input 
                type="email" 
                name='email' 
                value={formData.email} 
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div>
            <label>
                Password:
                <input 
                type="password" 
                name='password'  
                value={formData.passwor} 
                onChange={handleInputChange}
                />
            </label>
        </div>
        <button type='submit'>Registrar Usuario</button>
    </form>
  )
}

export default RegistrarFormulario