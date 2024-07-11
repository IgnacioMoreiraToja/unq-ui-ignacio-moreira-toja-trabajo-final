import { Route, Routes } from 'react-router-dom'

import DifficultyPage from './DifficultyPage/DifficultyPage'
import Home from './Home/Home'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import QuestionsPage from './QuestionsPage/QuestionsPage'

const RouterApp = ({ difficulty, setDifficulty }) => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/difficulty" element={<DifficultyPage setDifficulty={setDifficulty} />} />
    <Route path="/questions" element={<QuestionsPage difficulty={difficulty} />} />
    <Route path ="/*" element = {<NotFoundPage/>}/>
  </Routes>
)

export default RouterApp