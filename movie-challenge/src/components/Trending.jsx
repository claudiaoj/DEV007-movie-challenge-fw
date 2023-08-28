import '../components/trending.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Trending() {
    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=e76e43be11ae30706e80f301fd5ccfee';

    const getMovies = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
    }

    useEffect(() => {
    getMovies();
    }, []);

    return (

        <div>
            <h1 className='movies_heading'>Trending</h1>
            <div className='movies_container'>
            {
                movies.map(movie => (
                <Link to={'/movies/' + movie.id} key={movie.id}>
                    <div className='movie_title_tren movie_card' key={movie.id}>
                        <img className='img_tren' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.name} />
                        <p className='title_tren' >{movie.title || movie.name}</p>
                    </div>
                </Link>
            ))
            }
            </div>
        </div>
    )
}

export default Trending;