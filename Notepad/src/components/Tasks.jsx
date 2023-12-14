import { useState } from "react"

export default function Tasks( { tasks, onAddTask, onRemoveTask } ) {

    const [ newTask, setNewTask ] = useState(""); 

    function handleChange( event ) {
        setNewTask( event.target.value )

    }

    function handleOnAddTask() {
        onAddTask( newTask )
        setNewTask("");
    }

    return(
        <>
        <h2 className="mt-2 text-2xl font-sans text-stone-600 font-bold" >
        Tasks
        </h2>
        <input className="mt-4 p-1 bg-stone-200 w-1/2 rounded-sm" type="text" value={newTask} onChange={handleChange} />
        <button onClick={handleOnAddTask} className="text-md font-sans text-stone-500 hover:text-stone-800 mx-2 px-4 rounded-md" > Add Task </button>
        { !tasks && <p className="mt-4 text-stone-800"> This project does not have any tasks yet. </p> }
        { tasks && <div className="bg-stone-100 py-4 mt-8 rounded-md"> 
        { 
        tasks.map( (item) => {
            return ( <div className="p-2 flex" key={item.id} > 
                <span> { item.name } </span>
                <button onClick={() => onRemoveTask(item.id) } className="ml-auto mx-2" > Clear </button>
            </div> )
        })
        } </div> }
    </>
    )
}