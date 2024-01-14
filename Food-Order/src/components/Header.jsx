import logoHeaderImg from '../assets/logo.jpg';

export default function Header() {
    return ( 
    <div id="main-header">
        <div id="title"> 
            <img src={logoHeaderImg} />
            <h1> REACTFOOD </h1>
        </div>
        <button className='text-button'>
            Cart(0)
        </button>
    </div> 
    )
}