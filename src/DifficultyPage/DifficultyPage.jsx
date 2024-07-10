import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../Api'
import './DifficultyPage.css'
import DifficultyButton from '../DifficultyButton/DifficultyButton'
import Spinner from '../Spinner/Spinner'

const DifficultyPage = ({ setDifficulty }) => {
    const [difficulties, setDifficulties] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        getDifficulty()
            .then((response) => {
                setDifficulties(response.data)
            })
            .catch(error => {
                console.error("Error fetching difficulties:", error)
            })
            .finally(()=> setLoading(false));
    }, [])

    const handleDifficultyClick = (dif) => {
        setDifficulty(dif)
        navigate("/questions")
    }

    return (
        <div className='DifficultyContainer'>
            {loading ? <Spinner /> : 
                <>
                    <div className='DifficultyTitle'>Select difficulty</div>
                    {difficulties.map((dif, index) => (
                        <DifficultyButton key={index} difLevel={dif} onClick={() => handleDifficultyClick(dif)} />
                    ))}
                </>
            }
        </div>
    )
}

export default DifficultyPage