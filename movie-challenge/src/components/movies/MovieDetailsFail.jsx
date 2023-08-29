import maintenance from '../../../public/maintenance.png';
import './movieDetailsFail.css';
import { useNavigate } from 'react-router-dom';

function MovieDetailsFail() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); 
    };


    return (
        <>
            <div className="back-button-container">
                <button onClick={goBack} className="back-button">Go Back</button>
            </div>
            <div className='container-fail'>
                <h1 className='title-fail'>Movie Detail Not Available</h1>
                <img src={maintenance} alt="Maintenance" className='img-fail' />
            </div>
        </>
    );
}

export default MovieDetailsFail;
