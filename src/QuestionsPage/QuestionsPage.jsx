import './QuestionsPage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuestions, postAnswer } from '../Api'
import QuestionButton from '../QuestionButton/QuestionButton'
import Spinner from '../Spinner/Spinner'
import { Howl } from 'howler';
import Finished from '../Finished/Finished'

const QuestionsPage = ({ difficulty }) => {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(false)
    const navigate = useNavigate()

    const options = ['option1', 'option2', 'option3', 'option4']

    const correctSound = new Howl({
        src: "./correct.mp3"
    });

    const incorrectSound = new Howl({
        src: "./incorrect.mp3"
    });

    useEffect(() => {
        getQuestions(difficulty)
            .then((response) => {
                setQuestions(response.data)
            })
            .catch(error => {
                console.error("Error fetching questions:", error)
            })
            .finally(() => setTimeout(() => {setLoading(false)}, 1000))
    }, [])

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
                    correctSound.play();
                } else {
                    setCorrectAnswer(null)
                    incorrectSound.play();
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
            setFinished(true)
        }
    }

    


    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div className='QuestionsContainer'>
            {finished ? (
                <Finished score={score} />
            ) : (
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className='Question'>{currentQuestion.question}</div>
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
                        <div className='Score'>Score: {score}</div>
                    </>
                )
            )}
        </div>
    );
}

export default QuestionsPage;


