import { useState, useEffect } from "react"

export default function QuestionTimer( {timeout, onTimeout, mode} ) {
    
    const [remainingTime, setRemainingTime] = useState(timeout)
    const updateSpeed = 100;

    useEffect( () => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout( timer );
        }
    }, [ timeout, onTimeout ] );
   
    useEffect( () => {
        const interval = setInterval( () => {
            setRemainingTime( prevRemainingTime => prevRemainingTime - updateSpeed )
        }, updateSpeed );

        return () => {
            clearInterval( interval );
        }
    }, [] );

    return <progress 
        id="question-time" 
        max={timeout} 
        value={remainingTime} 
        className={mode}
    />
}