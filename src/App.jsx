import { useState } from 'react'
import "./index.css";
import General from './components/General'
import Education from './components/Education';
import Practical from './components/Practical';
import CVResult from './components/CVResult';

function App() {


  return (
    <>
      <h1>CV Generator</h1>
      <div className='main-container'>
        <div className='main-sections left'>
          <General />
          <Education />
          <Practical />
        </div>

        <div className='main-sections right'>
          <CVResult />
        </div>

      </div>     
    </>
  )
}

export default App
