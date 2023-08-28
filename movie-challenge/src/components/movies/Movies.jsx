import './movies.css';
import '../trending.css';
import { useState, useEffect } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [visiblePages, setVisiblePages] = useState([]);
    const apiKey = 'e76e43be11ae30706e80f301fd5ccfee';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`;
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
                setTotalPages(data.total_pages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [apiKey, currentPage]);

    useEffect(() => {
        const updateVisiblePages = () => {
            const range = 5; 
            const halfRange = Math.floor(range / 2);

            const leftBoundary = Math.max(1, currentPage - halfRange);
            const rightBoundary = Math.min(totalPages, leftBoundary + range - 1);

            setVisiblePages(Array.from({ length: rightBoundary - leftBoundary + 1 }, (_, index) => leftBoundary + index));
        };

        updateVisiblePages();
    }, [currentPage, totalPages]);

    const changePage = pageNumber => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div>
            <h1 className='movies_heading'>All Movies</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className='movies_container'>
                    {movies.map(movie => (
                        <div className='movie_card' key={movie.id}>
                            <img className='movie_poster' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title || movie.name} />
                            <p className='movie_title'>{movie.title || movie.name}</p>
                            {/* Mostrar más información de la película aquí */}
                        </div>
                    ))}
                </div>
            )}
            <div className='pagination'>
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>⬅</button>
                {visiblePages.map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => changePage(pageNumber)}
                        className={currentPage === pageNumber ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>⮕</button>
            </div>
        </div>
    );
}

export default Movies;
