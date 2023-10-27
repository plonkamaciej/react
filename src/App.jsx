import Header from './components/Header';
import Main from './components/Main';
import TabButton from './components/TabButton';
import { EXAMPLES } from './components/data';

import { useState } from 'react'

import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <div className='bg'>
      <section>
        <Header />
        <Main />
      </section>
      <section>
        <h2 className='examples'>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div className="box">
          <h2>{EXAMPLES[selectedTopic].title}</h2>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      </section>
    </div>
  )
}
export default App;
