import InputLabel from "./InputLabel";
import { useState } from "react";

export default function CreateProject( { onCancel, onSave, id } ) {

    const[ form, setForm ] = useState({ name: "", descripcion: "", fecha: "", id: id });

    function updateForm( field, value ) {
        setForm( prevForm => {
            return {
                ...prevForm,
                [field] : value
            }
        } );
    }

    return(
        <main className="w-2/3 mt-20 ">
            <div className="text-right">
                <button onClick={onCancel} className="text-stone-800 text-xl"> Cancel </button>
                <button onClick={() => {onSave(form) }} className="bg-stone-800 text-stone-200 py-2 px-6 rounded-lg text-xl mx-6 "> Save </button>
            </div>
            <InputLabel title="Title" type="text" onChange={updateForm} field="name" form={form} />
            <InputLabel title="Description" type="textarea" onChange={updateForm} field="descripcion" form={form} />
            <InputLabel title="Due date" type="date" onChange={updateForm} field="fecha" form={form} />
        </main>
    )
}