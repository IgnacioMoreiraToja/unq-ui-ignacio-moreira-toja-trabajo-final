import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className='NotFoundContainer'>
            <h1 className='NotFoundTitle'>404 - Página No Encontrada</h1>
            <p className='NotFoundMessage'>Lo sentimos, la página que estás buscando no existe.</p>
            <button className='NotFoundButton' onClick={() => window.history.back()}>Volver</button>
        </div>
    );
};

export default NotFoundPage;