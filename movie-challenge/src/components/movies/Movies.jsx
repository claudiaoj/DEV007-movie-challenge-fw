
import './movies.css'
import { useEffect, useState } from 'react';


function Movies() {
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=e76e43be11ae30706e80f301fd5ccfee';

    const getMovies = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        // console.log(data);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
    }

    useEffect(() => {
    getMovies();
    }, []);

    return (
        <div>
        <h1 className='movies_heading'>All Movies</h1>
        <div className='movies_container'>
        {
            movies.map(movie => (
                <div className='movie_title_tren' key={movie.id}>
                <img className='img_tren' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title || movie.name} />
                <p className='title_tren'>{movie.title || movie.name}</p>
                </div>
            ))
        }
        </div>
    </div>
    )
}

export default Movies;
