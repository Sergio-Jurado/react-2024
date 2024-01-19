const Card = (props) =>{
    const { title, description, bgColor } = props
    return (
        <div className={`p4 rounded-md shadow-md ${bgColor}`}>
            <h2 className="text-x1 font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            
        </div>
    )
}

const ComponenteProps = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Card 
        title="El Señor de los anillos" 
        description="Está muy guapa"
        bgColor= "bg-green-200"/>
    </div>
  )
}

export default ComponenteProps