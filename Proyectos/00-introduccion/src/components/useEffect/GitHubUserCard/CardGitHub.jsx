

const CardGitHub = ({login, avatar_url, html_url, openModal}) => {

    function handleClickAvatar(){
        openModal(avatar_url);
    }

  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
        <div className="relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
            <img 
                src={avatar_url}
                alt={login} 
                className="w-32 h-32 rounded-full my-4 mx-auto cursor-pointer"
                onClick={handleClickAvatar}
            />
        </div>

        <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug text-blue-900/75 antialiased tracking-normal">
                Usuario: {login}
            </h5>
            <p className="block font-mono text-base font-light leading-relaxed text-inherit antialiased">
                GitHub: {html_url}
            </p>
        </div>

        <div className="p-6">
            <button className="select-none rounded-lg bg-blue-500 py-3 mx-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue500/20 transition-all hover:shadow-lg hover: shadow-blue-900/80">
                Ir a GitHub
            </button>
        </div>
    </div>
  )
}

export default CardGitHub