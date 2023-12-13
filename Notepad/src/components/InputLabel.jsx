export default function InputLabel( {title, type, onChange, field, form} ) {
    
    const classes = "w-full px-1 rounded-md bg-stone-300 py-1"

    const inputVar = <input className={classes} type={type} value={form[field]} onChange={handleChange} ></input>
    const textareaVar = <textarea className={classes} value={form[field]} onChange={handleChange} ></textarea>

    function handleChange( event ) {
        onChange( field, event.target.value )
    }

    return ( 
        <div className="flex-col pr-6 mt-4" >
            <label className="text-xl font-medium text-stone-700 uppercase" > {title} </label>
            { type === 'textarea' ? textareaVar : inputVar }
        </div>
    )
}