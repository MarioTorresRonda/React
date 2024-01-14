import { useState } from "react";

export function useInput( defaultValue, validationFn ) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setdidEdit] = useState( false );   

    const valueIsValid = validationFn(enteredValue);

    function handleValueChange( event ) {
        setEnteredValue( event.target.value );
        setdidEdit( false );
    }
    function handleInputBlur() {
        setdidEdit(true);
    }
    
    return {
        value: enteredValue,
        handleValueChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }

}