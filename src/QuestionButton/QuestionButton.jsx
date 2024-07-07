import './QuestionButton.css'

const QuestionButton = ({ option, onClick }) => {
    return (
        <button className='QuestionButton' onClick={onClick}>
            {option}
        </button>
    )
}

export default QuestionButton