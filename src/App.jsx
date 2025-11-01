import { useState } from 'react'
import "./index.css";
import General from './components/General'
import Education from './components/Education';
import Practical from './components/Practical';
import CVResult from './components/CVResult';

function App() {
  const [generalInfo, setGeneralInfo] = useState({fullName: '', email: '', phone: '', summary: ''});

  function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        setGeneralInfo(formJson)

        e.target.reset()
    }
console.log('generalInfo', generalInfo)

  return (
    <>
      <h1>CV Generator</h1>
      <div className='main-container'>
        <div className='main-sections left'>
          <General handleSubmit={handleSubmit}/>
          <Education />
          <Practical />
        </div>

        <div className='main-sections right'>
          <CVResult generalInfo={generalInfo}/>
        </div>

      </div>     
    </>
  )
}

export default App
