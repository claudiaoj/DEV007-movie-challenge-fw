import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieDetailsFail from './MovieDetailsFail';
import './moviesDetails.css';

function MoviesDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const { movieId } = useParams();
    const apiKey = 'e76e43be11ae30706e80f301fd5ccfee';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [apiKey, movieId]);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            {!movieDetails.title || !movieDetails.poster_path ? (
                <MovieDetailsFail />
            ) : (
                <>
                    <div className="back-button-container">
                        <button onClick={goBack} className="back-button">
                            Go Back
                        </button>
                    </div>
                    <h1 className='md-title'>{movieDetails.title}</h1>
                    <div className='md-container'>
                        <img
                            className='col md-img'
                            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                        />
                        <div className='col md-details'>
                            <div className="md-info">
                                <p className="md-info-title"><strong>Overview:</strong></p>
                                <p>{movieDetails.overview}</p>
                            </div>
                            <div className="md-info">
                                <p className="md-info-title"><strong>Release Date:</strong></p>
                                <p>{movieDetails.release_date}</p>
                            </div>
                            <div className="md-info">
                                <p className="md-info-title"><strong>Duration:</strong></p>
                                <p>{movieDetails.runtime} minutes</p>
                            </div>
                            <div className="md-info">
                                <p className="md-info-title"><strong>Genres:</strong></p>
                                <p>{movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                            </div>
                            <div className="md-info">
                                <p className="md-info-title"><strong>Average Rating:</strong></p>
                                <p>{movieDetails.vote_average}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviesDetails;

// <p>Original Language: {movieDetails.original_language}</p>