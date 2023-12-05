import { useState, useRef } from 'react'


export default function Player() {
  
  const playerNameRef = useRef()
  const [savedPlayerName, setSavedPlayerName] = useState('unknown entity');

  function handleClick() {
    setSavedPlayerName( playerNameRef.current.value )
    playerNameRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {savedPlayerName}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
