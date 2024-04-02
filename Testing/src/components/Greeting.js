import { useState } from "react"
import Output from "./Output"

export default function Greeting() {
    const [changeText, setChangeText] = useState(false)

    function changeTextHandler() {
        setChangeText(true)
    }

    return (
    <div>
        <h2> Hello World!</h2>
        { !changeText && <Output> It's a good to see you! </Output> }
        { changeText && <Output> Changed! </Output> }
        <button onClick={changeTextHandler} >Change Text!</button>

    </div>
    )
}