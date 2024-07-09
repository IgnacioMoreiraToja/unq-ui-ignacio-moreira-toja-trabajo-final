import './QuestionsPage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuestions, postAnswer } from '../Api'
import QuestionButton from '../QuestionButton/QuestionButton'

const QuestionsPage = ({ difficulty }) => {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const navigate = useNavigate()

    const options = ['option1', 'option2', 'option3', 'option4']
    

    useEffect(() => {
        getQuestions(difficulty)
            .then((response) => {
                setQuestions(response.data)
            })
            .catch(error => {
                console.error("Error fetching questions:", error)
            })
    }, [])

    const currentQuestion = questions[currentQuestionIndex]

    const handleOptionClick = (optionSelected) => {
        const currentQuestionId = questions[currentQuestionIndex].id
            
            const answer = {
                questionId: currentQuestionId,
                option: optionSelected,
            };
            
            const answerCheck = JSON.stringify(answer);

        postAnswer(answerCheck)
            .then((response) => {
                if(response.answer){
                    setCorrectAnswer(currentQuestion[option])
                    setScore(lastScore => lastScore + 1)
                } else {
                    setCorrectAnswer(null)
                }
            })
            .finally(() => {
                setTimeout(() => handleNextQuestion(), 3000);
            })           
    }

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex)
            setCorrectAnswer(null)
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

    return (
        <div className='QuestionsContainer'>
            <h2>{currentQuestion.question}</h2>
            <div className='Options'>
                {options.map((opt,index) => (
                <QuestionButton
                    key= {index}
                    option={currentQuestion[opt]}
                    onClick={() => handleOptionClick(opt)}
                    correctAnswer= {correctAnswer} />
                ))}
            </div>
            <button onClick={handleNextQuestion}>Siguiente</button>
        </div>
    )
}

export default QuestionsPage