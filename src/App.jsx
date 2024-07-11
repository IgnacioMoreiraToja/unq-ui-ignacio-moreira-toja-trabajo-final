import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RouterApp from './Router'

function App() {
  const [difficulty, setDifficulty] = useState("")

  return (
    <div className='BigContainer'>
      <img src="./titulo.png" className='Title'/>
      <div className='App'>
        <Router>
          <RouterApp difficulty={difficulty} setDifficulty={setDifficulty} />
        </Router>
      </div>
    </div>
  )
}

export default App