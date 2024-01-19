import { useState } from "react";
import { useEffect } from "react";
import fetchGithubUsers from "../../../helpers/fetchGithubUsers";
import CardGitHub from "./CardGitHub";
import Spinner from "./Spinner";
import Modal from "./Modal";

function GitHubUserCard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectUser, setSelectUser] = useState(null);

    const openModal = (avatarUrl) =>{
      setSelectUser(avatarUrl);
    }

    const closeModal = () =>{
      setSelectUser(null);
    }
    

    useEffect(() => {
      // Traer la data, la guardo en una variable llamada fetchData y por último la seteo a mi estado con setUsers

      const fetchData = async () => {
        try{
          setTimeout(async() =>{
            const data = await fetchGithubUsers()
            setUsers(data)
            console.log(data);
            setLoading(false);
          }, 3000);
            
        }catch(err){
            setLoading(true);
        }
      }
      fetchData();
    }, [])
    

  return (
    <div className="mx-auto max-w-[75%] text-center relative">
      <h1 className="text-3x1 font-mono font-bold my-8">Usando UseEffecto para realizar un fetch de la API GitHub</h1>
    {loading ? (
      <Spinner />

    ):(
      <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          users.map((user)=>(
            <CardGitHub
            key={user.id}
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
            openModal={openModal}
            />
          ))
        }
      </div>
      <Modal 
      isOpen={!!selectUser}
      avatar_url={selectUser}
      onClose={closeModal}
      />
      </>
    )}
    </div>
  )
}

export default GitHubUserCard