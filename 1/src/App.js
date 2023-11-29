import { useState } from 'react';

import './App.css';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './compontents/Header'
import CoreConcept from './compontents/CoreConcept'
import TabButton from './compontents/TabButton';

function App() {

  const [selectedTopic, setSelectedTopic ] = useState();

  function handleSelect( selectedButton ) {
    setSelectedTopic( selectedButton );
  }

  let tabContent = <p> Please select a topic </p>;
  if ( selectedTopic ) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <div className='core-concepts'>
        <h2> Core Concepts</h2>
        <ul>
          { CORE_CONCEPTS.map( (item) => { return < CoreConcept {...item} /> }  ) }
        </ul>
      </div>
      <div className='examples'>
        <h2> Examples </h2>
        <menu>
          <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[0].title.toLowerCase())}> { CORE_CONCEPTS[0].title } </TabButton>
          <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[1].title.toLowerCase())}> { CORE_CONCEPTS[1].title } </TabButton>
          <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[2].title.toLowerCase())}> { CORE_CONCEPTS[2].title } </TabButton>
          <TabButton onSelect={() => handleSelect(CORE_CONCEPTS[3].title.toLowerCase())}> { CORE_CONCEPTS[3].title } </TabButton>
        </menu>
        { tabContent }
      </div>
    </div >
  );
}

export default App;
