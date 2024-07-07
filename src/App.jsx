import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import RouterApp from './Router'

function App() {
  const [difficulty, setDifficulty] = useState("")

  return (
    <Router>
      <div className='Title'> Preguntados </div>
      <RouterApp difficulty={difficulty} setDifficulty={setDifficulty} />
    </Router>
  )
}

export default App