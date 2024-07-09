import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import RouterApp from './Router'

function App() {
  const [difficulty, setDifficulty] = useState("")

  return (
    <div className='BigContainer'>
      <div className='Title'>PREGUNTA2</div>
      <div className='App'>
        <Router>
          <RouterApp difficulty={difficulty} setDifficulty={setDifficulty} />
        </Router>
      </div>
    </div>
  )
}

export default App