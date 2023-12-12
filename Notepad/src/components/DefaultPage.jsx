export default function DefaultPage( { onOpenProject } ) {
    return(
        <main className="w-2/3 mt-36 text-center">
            <img className="h-20 mx-auto" src="logo.png" ></img>
            <h2 className="text-2xl font-bold text-stone-700 my-4">No project selected </h2>
            <p className="my-6 text-lg text-stone-400"> Select a project or get started with a new one </p>
            <button onClick={() => onOpenProject() } className="bg-stone-800 text-stone-400 hover:bg-stone-950 rounded-md py-2 px-6 mt-4" > Create new project </button>
        </main>
    )
}