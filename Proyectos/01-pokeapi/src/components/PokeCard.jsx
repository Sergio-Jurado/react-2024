

const PokeCard = (props) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
        <div className="relative mx-4 mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
            <img 
                src={}
                alt={} 
                className="w-32 h-32 rounded-full my-4 mx-auto cursor-pointer"
                onClick={}
            />
        </div>

        <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug text-blue-900/75 antialiased tracking-normal">
                Usuario: {}
            </h5>
            <p className="block font-mono text-base font-light leading-relaxed text-inherit antialiased">
                GitHub: {}
            </p>
        </div>

        
    </div>
  )
}

export default PokeCard