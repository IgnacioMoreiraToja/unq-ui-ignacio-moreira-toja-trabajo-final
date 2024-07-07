import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../Api'
import './DifficultyPage.css'
import DifficultyButton from '../DifficultyButton/DifficultyButton'

const DifficultyPage = ({ setDifficulty }) => {
    const [difficulties, setDifficulties] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getDifficulty()
            .then((response) => {
                setDifficulties(response.data)
            })
    }, [])

    const handleDifficultyClick = (dif) => {
        setDifficulty(dif)
        navigate("/questions")
    }

    return (
        <div className='DifficultyContainer'>
            <h2 className='DifficultyTitle'>Selecciona la Dificultad</h2>
            {difficulties.map((dif, index) => (
                <DifficultyButton key={index} difLevel={dif} onClick={() => handleDifficultyClick(dif)} />
            ))}
        </div>
    )
}

export default DifficultyPage