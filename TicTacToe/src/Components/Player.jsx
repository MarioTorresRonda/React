
import { useState } from "react"

export default function Player( {initialName, symbol, isActive, onChangeName} ) {

    const [ name, setName ] = useState( initialName );
    const [ isEditing, setIsEditing ] = useState( false );

    function handeEditClick() {
        setIsEditing( (editing) => !editing );

        if ( isEditing ) {
            onChangeName( symbol, name )
        }

    }

    function handleChange( event ) {
        setName( event.target.value )
    }

    var nameField = ( <span className="player-name" > {name} </span> )
    var buttonText = ( <span> Edit </span> )

    if ( isEditing ) {
        nameField = (
         <input type="text" required value={name} onChange={handleChange} />
        )
        buttonText = ( <span> Save </span> )
    }

    return (
        <li className={ isActive ? 'active' : undefined } > 
        <span className="player">
          {nameField}
          <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={handeEditClick}>
            {buttonText}
        </button>
      </li>
    )
}