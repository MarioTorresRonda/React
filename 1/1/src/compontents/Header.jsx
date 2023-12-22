import logo from '../logo.svg';
import './Header.css';

const reactDescripcion = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const description = reactDescripcion[genRandomInt(reactDescripcion.length - 1)];
    console.log( description )
    return (   
      <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2> React Essentials  </h2>
        <p >
          { description } React concepts you will need for almos any app
        </p>
      </div>
      </header>
    )
  }