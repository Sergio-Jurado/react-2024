import { useState } from "react";

const initialState = {
    isaias: 0,
    ana: 0,
}

const ContadorDobleV2 = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrementFriend(friendName){
        setFriends((prevFriends) => ({
                ...friends,
                [friendName]: prevFriends[friendName] + 1,
        }));
    }
  return (
    <>
    <div>
        <h1>Contador Doble</h1>
        <span>Isaias tiene <strong>{friends.isaias}</strong> amigos</span>
        <button onClick={() => handleIncrementFriend("isaias")}>Añadir un amigo a Isaias</button>
    </div>
    <div>
        <h1>Contador Doble</h1>
        <span>Ana tiene <strong>{friends.ana}</strong> amigos</span>
        <button onClick={() => handleIncrementFriend("ana")}>Añadir un amigo a Ana</button>
    </div>
    </>
  )
}

export default ContadorDobleV2