import './Finished.css';

import { useNavigate } from 'react-router-dom';

const Finished = ({ score }) => {
    const navigate = useNavigate();

    const restartGame = () => {
        navigate("/");
    }

    return (
        <div className="FinishedContainer">
             <div className="FinishTitle">GAME OVER</div>
            <div className="GameOver">Your score: {score}</div>
            <button className="RestartButton" onClick={restartGame}>Restart</button>
        </div>
    )
}

export default Finished;