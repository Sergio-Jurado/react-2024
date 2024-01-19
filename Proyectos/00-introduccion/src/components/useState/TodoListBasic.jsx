import { useState } from "react";
const initialState = [
    {
    id: 1,
    title: "Comprar leche",
    completed : false,
    },
    {
        id: 2,
        title: "Comprar Agua",
        completed : false,
    },
    {
        id: 3,
        title: "Estudiar React",
        completed : false,
    },
]


function TodoListBasic() {

    const [tasks, setsTasks] = useState(initialState);

    function handleCompletion(taskId) {
        const updateTask = tasks.map(task => (
            task.id === taskId ? {...task, completed: !task.completed} : task
        ));
        setsTasks(updateTask)
    }

  return (
    <>
    <div>
        <h1>Lista de Tareas</h1>
        <ul>
            {
                tasks.map((task) => (
                    <li 
                    key={task.id}>
                        <input 
                        type="checkbox"
                        checked = {task.completed}
                        onChange={() => handleCompletion(tasks.id)}
                        ></input>
                        <span style={{textDecoration : task.completed ? "line-through" : "none"}}>
                        {task.title} 
                        </span>
                    </li>
                ))
            }
        </ul>
    </div>
    </>
    
  )
}

export default TodoListBasic