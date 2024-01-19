
import "./DarkLightMode.css"

import { useState } from 'react';
const DarkLightMode = () => {

  const [darkMode, setDarkMode] = useState(false);

  function handleToggleTheme(){
    setDarkMode(!darkMode);
  }

  return (
    <>
    <div className={`default ${darkMode ? "dark":"light"}`}>
      <h1>Cambio de tema en React</h1>
      <button onClick={handleToggleTheme}>{darkMode ? "Modo claro" : "Modo oscuro"}</button>
    </div>
    </>
  )
}

export default DarkLightMode