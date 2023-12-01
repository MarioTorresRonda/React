import { useState } from "react"
import InputLabel from "./components/InputLabel"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment.js"

function isSomeValueNull( object ) {
  let isNull = false;
  Object.keys( object ).forEach( (id) => {
    if ( object[id] == null || object[id] == undefined ) {
      isNull = true;
    }
  } )
  return isNull;
}

function App() {

  const [results, setResults] = useState([]);
  const [inputs, setInputs] = useState({}); 

  function setInputValue( field, value ){
    var updatedInputs = {...inputs, [field] : value };
     setInputs( prevInputs => updatedInputs );
     if ( Object.keys( updatedInputs ).length > 3 ) {
      console.log( isSomeValueNull(updatedInputs) );
       if ( !isSomeValueNull(updatedInputs) ) {
          setResults( prevResults => { 
            let updatedResults = calculateInvestmentResults( updatedInputs );
            console.log( updatedResults )
            return updatedResults
          } )
      }
    }

  }

  return (
    <>
      <div id="user-input" >
      <div className="input-group" style={{marginBottom:'20px'}} >
        <InputLabel title="Initial Investment" field="initialInvestment" onChange={setInputValue} />
        <InputLabel title="Annual Investment" field="annualInvestment" onChange={setInputValue} />
      </div>
      <div className="input-group" >
        <InputLabel title="Expected Return" field="expectedReturn" onChange={setInputValue} />
        <InputLabel title="Duration" field="duration" onChange={setInputValue} /> 
      </div>
    </div>
    <Result resultObj={results} />
    </>
  )
}

export default App
