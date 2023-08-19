import '../components/trending.css'
import { useEffect, useState } from 'react';

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
        {
        movies.map(movie => (
            <div className='auto-grid' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.name} />
                <p >{movie.title || movie.name}</p>

            </div>
        ))
        }
        </div>
    )
}

export default Trending;