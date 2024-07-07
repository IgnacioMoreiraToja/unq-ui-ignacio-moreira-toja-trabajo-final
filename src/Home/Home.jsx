import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate('/difficulty')
    }

    return (
        <div className='HomeContainer'>
            <h1 className='HomeTitle'>Bienvenidos a Preguntados</h1>
            <button className='HomeButton' onClick={handleStart}>Comenzar</button>
        </div>
    )
}

export default Home