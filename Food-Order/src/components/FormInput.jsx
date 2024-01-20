

export default function FormInput( { title, onHandleChangeForm, name, formObj, ...inputProps } ) {
    
    function onHandleChange( event ) {
        onHandleChangeForm( name, event.target.value );
    }

    return ( 
        <div className="control">
            <label> {title} </label>
            <input onChange={onHandleChange} name={name} value={formObj[name]} {...inputProps} />
        </div>
    )
}