
export default function Sidebar( {projects, onOpenProject, onSelectProject} ){

    let buttonClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

    return(
        <aside className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200"> YOUR PROJECTS </h2>
            <button onClick={() => onOpenProject() }  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                + Add Project
            </button>
            <ul className="mt-8"> {projects.map((item) => {
                let customButtonClasses = buttonClasses;
                if ( item.active ) { customButtonClasses += " bg-stone-800"; }
                return (
                    <li key={item.id} ><button onClick={() => {onSelectProject(item.id)}} className={customButtonClasses} > { item.name} </button> </li>
                )
            }) } </ul>
        </aside>
    )
}