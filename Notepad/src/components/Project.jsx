import Tasks from "./Tasks";
import { getSelectedProject } from "../Utils";

export default function Project( { projects , onHandleAddTask, onHandleRemoveTask, onRemoveProject } ) {

    let project = getSelectedProject( projects )

    function formatFecha() {
        return new Date(project.fecha).toLocaleDateString('es-ES', {  year:"numeric", month:"short", day:"numeric"})
    }

    function onAddTask( task ) {
        onHandleAddTask( task );
    }

    function onRemoveTask( id ) {
        onHandleRemoveTask( id );
    }

    return (
        <main className="w-2/3 mt-12 mr-6">
            <div className="flex mb-2" >
                <h1 className="text-3xl font-sans text-stone-600 font-bold" > {project.name} </h1>
                <button onClick={onRemoveProject} className="text-md font-sans text-stone-500 hover:text-stone-800  px-4 rounded-md ml-auto" > Delete </button>
            </div>
            <span className="text-stone-400 text-sm" > {formatFecha()} </span>
            <p className="mt-4 text-stone-700 font-san whitespace-pre-line " >
                { project.descripcion }
            </p>
            <hr className="mt-4 border-2 border-stone-300" />
            <Tasks tasks={project.tasks} onAddTask={onAddTask} onRemoveTask={onRemoveTask} ></Tasks>
        </main>
    )
}