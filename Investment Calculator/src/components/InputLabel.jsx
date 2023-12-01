import { useState } from "react"

export default function InputGroup( { title, field, onChange } ) {

    const [ value, setValue ] = useState();

    function handleChange( event ) {
        setValue( () => { Number( event.target.value ) } )
        onChange( field, Number( event.target.value ) )
    }

    return (
        <div>
            <label> {title} </label>
            <input type="number" required value={value} onChange={handleChange} />
        </div>
        )
}
