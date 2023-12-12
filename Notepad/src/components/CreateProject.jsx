export default function CreateProject( { onCancel } ) {
    return(
        <main className="w-2/3 mt-20 ">
            <div className="text-right">
                <button onClick={onCancel} className="text-stone-800 text-xl"> Cancel </button>
                <button className="bg-stone-800 text-stone-200 py-2 px-6 rounded-lg text-xl mx-6 "> Save </button>
            </div>
        </main>
    )
}