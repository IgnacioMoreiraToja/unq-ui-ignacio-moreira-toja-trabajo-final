import { useState } from 'react';
import './QuestionButton.css'

const QuestionButton = ({ option, onClick, correctAnswer }) => {

    const [selected, setSelected] = useState(false)
    const [correct, setCorrect] = useState(correctAnswer)

    const handleClick = () => {
        onClick()
        setSelected(true)
        setTimeout(() => setSelected(false), 3100);
    }

    let classNameQuestion = 'QuestionButton '
    if (selected){
        classNameQuestion += (correct === option? 'winner' : 'loser')
    }


    return (
        <button className = {classNameQuestion}
                onClick={handleClick}>
                {option}
        </button>
    )
}

export default QuestionButton;