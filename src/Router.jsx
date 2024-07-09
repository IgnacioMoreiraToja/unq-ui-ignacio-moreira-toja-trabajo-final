import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import DifficultyPage from './DifficultyPage/DifficultyPage'
import QuestionsPage from './QuestionsPage/QuestionsPage'

const RouterApp = ({ difficulty, setDifficulty }) => (
  <Routes>
    <Route path="/" element={<Home setDifficulty={setDifficulty} />} />
    <Route path="/difficulty" element={<DifficultyPage setDifficulty={setDifficulty} />} />
    <Route path="/questions" element={<QuestionsPage difficulty={difficulty} />} />
  </Routes>
)

export default RouterApp