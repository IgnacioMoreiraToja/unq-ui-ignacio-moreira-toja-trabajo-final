import { useEffect, useState } from 'react'
import './QuestionButton.css'

const QuestionButton = ({ option, onClick, isSelected, isCorrect }) => {

    const [selected, setSelected] = useState(false)

    useEffect(()=>{
        setSelected(false)
        
    },[option])

    const handleClick = () => {
        if(!isSelected){
            onClick()
            setSelected(true)
        }
    }

    let classNameQuestion = 'QuestionButton '
    if (selected && isSelected) {
        classNameQuestion += isCorrect ? 'winner' : 'loser'
    }

    return (
        <button className={classNameQuestion} onClick={handleClick}>
            {option}
        </button>
    )
}

export default QuestionButton