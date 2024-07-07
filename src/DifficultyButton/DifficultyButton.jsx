import './DifficultyButton.css'

const DifficultyButton = ({ difLevel, onClick }) => {
    return (
        <button className='DifficultyButton' onClick={onClick}>
            {difLevel}
        </button>
    )
}

export default DifficultyButton