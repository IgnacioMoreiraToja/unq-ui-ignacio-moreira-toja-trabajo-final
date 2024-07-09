import './QuestionsPage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuestions, postAnswer } from '../Api'
import QuestionButton from '../QuestionButton/QuestionButton'
import Spinner from '../Spinner/Spinner'

const QuestionsPage = ({ difficulty }) => {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(false)
    const navigate = useNavigate()

    const options = ['option1', 'option2', 'option3', 'option4']

    useEffect(() => {
        getQuestions(difficulty)
            .then((response) => {
                setQuestions(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching questions:", error)
            })
            .finally(() => setLoading(false));
    }, [])

    const currentQuestion = questions[currentQuestionIndex]

    const handleOptionClick = (optionSelected) => {
        const currentQuestionId = currentQuestion.id

        const answer = {
            questionId: currentQuestionId,
            option: optionSelected,
        }

        postAnswer(answer)
            .then((response) => {
                if (response.data.answer) {
                    setCorrectAnswer(optionSelected)
                    setScore(lastScore => lastScore + 1)
                } else {
                    setCorrectAnswer(null)
                }
            })
            .catch((error) => {
                console.error("Error posting answer:", error)
            })
            .finally(() => {
                setSelected(true)
                setTimeout(() => {handleNextQuestion()}, 2000)
            })
    }

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex)
            setCorrectAnswer(null)
            setSelected(false)
        } else {
            setIsFinished(true)
        }
    }

    const handleFinishGame = () => {
        navigate("/")
    }

    if (isFinished) {
        return (
            <div className='QuestionsContainer'>
                <h2>¡Juego terminado! Tu puntuación: {score}</h2>
                <button onClick={handleFinishGame}>Volver al Inicio</button>
            </div>
        )
    }

    return (
        <div className='QuestionsContainer'>
            {loading ? <Spinner /> : (
                <>
                    <h2>{currentQuestion.question}</h2>
                    <div className='Options'>
                        {options.map((opt, index) => (
                            <QuestionButton
                                key={index}
                                option={currentQuestion[opt]}
                                onClick={() => handleOptionClick(opt)}
                                isSelected={selected}
                                isCorrect={correctAnswer === opt}
                            />
                        ))}
                    </div>
                    <div>Puntaje: {score}</div>
                </>
            )}
        </div>
    )
}

export default QuestionsPage
