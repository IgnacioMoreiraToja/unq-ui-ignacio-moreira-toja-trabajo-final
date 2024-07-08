import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuestions } from '../Api'
import './QuestionsPage.css'
import QuestionButton from '../QuestionButton/QuestionButton'

const QuestionsPage = ({ difficulty }) => {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getQuestions(difficulty)
            .then((response) => {
                setQuestions(response.data)
            })
            .catch(error => {
                console.error("Error fetching questions:", error)
            })
    }, [])

    const handleOptionClick = (option) => {
        setSelectedOption(option)
    }

    const handleNextQuestion = () => {
        if (selectedOption) {
            const currentQuestion = questions[currentQuestionIndex]
            if (selectedOption === currentQuestion.option1) {
                setScore(score + 1)
            }
        }

        const nextIndex = currentQuestionIndex + 1
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex)
            setSelectedOption(null)
        } else {
            setIsFinished(true)
        }
    }

    const handleFinishGame = () => {
        navigate("/")
    }

    if (questions.length === 0) {
        return <div>Loading...</div>
    }

    if (isFinished) {
        return (
            <div className='QuestionsContainer'>
                <h2>¡Juego terminado! Tu puntuación: {score}</h2>
                <button onClick={handleFinishGame}>Volver al Inicio</button>
            </div>
        )
    }

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div className='QuestionsContainer'>
            <h2>{currentQuestion.question}</h2>
            <div className='Options'>
                <QuestionButton option={currentQuestion.option1} onClick={() => handleOptionClick(currentQuestion.option1)} />
                <QuestionButton option={currentQuestion.option2} onClick={() => handleOptionClick(currentQuestion.option2)} />
                <QuestionButton option={currentQuestion.option3} onClick={() => handleOptionClick(currentQuestion.option3)} />
                <QuestionButton option={currentQuestion.option4} onClick={() => handleOptionClick(currentQuestion.option4)} />
            </div>
            <button onClick={handleNextQuestion}>Siguiente</button>
        </div>
    )
}

export default QuestionsPage