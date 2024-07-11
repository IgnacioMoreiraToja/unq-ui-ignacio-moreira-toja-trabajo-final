import './NotFoundPage.css';

import { useNavigate } from 'react-router-dom'


const NotFoundPage = () => {

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className='NotFoundContainer'>
            <h1 className="NotFoundTitle">404 - Page Not Found</h1>
            <p className="NotFoundMessage">The page you are looking for does not exist.</p>
            <button className='NotFoundButton' onClick={handleGoHome}>Go Home</button>
        </div>
    );
};

export default NotFoundPage;