import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate('/difficulty')
    }

    return (
        <div className='HomeContainer'>
            <div className='HomeTitle'>Welcome to Pregunta2</div>
            <button className='HomeButton' onClick={handleStart}>Begin!</button>
        </div>
    )
}

export default Home