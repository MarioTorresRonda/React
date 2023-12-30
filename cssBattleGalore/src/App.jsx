import './App.css'
import Battle from './componets/Battle';
import Header from './componets/Header';

import battleList from './battlesList';

function App() {

  return (
    <>
      <Header />
      <div className='flex' >
      { battleList.map( (item) => {
        
        return ( <Battle key={item.name} {...item} /> )
      } ) }
      </div>
    </>
  )
}

export default App
