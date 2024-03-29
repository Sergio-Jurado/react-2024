

const Modal = ({isOpen, avatar_url, onClose}) => {
  return (
    <div className={`fixed top-0 w-full h-full flex items-center ${ isOpen ? "opacity-100 visible":"opacity-0 invisible"} transition-opacity ease-in-out duration-500`}>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-80"></div>
    
        <div className="bg-white p-4 rounded-lg max-w-2x1 z-10">
            <img src={avatar_url} alt={avatar_url} className="w-full rounded"/>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={onClose}>Cerrar</button>
        </div>
    </div>
  )
}

export default Modal