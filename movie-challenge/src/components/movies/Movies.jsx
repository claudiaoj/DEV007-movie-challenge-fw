import './movies.css';
import '../trending.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [visiblePages, setVisiblePages] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Nuevo estado de búsqueda
    const [searchResults, setSearchResults] = useState([]); // Nuevo estado de resultados de búsqueda
    const apiKey = 'e76e43be11ae30706e80f301fd5ccfee';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let url;
                if (searchQuery) {
                    // Si hay una consulta de búsqueda, use la URL de búsqueda
                    url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}`;
                } else {
                    // Si no hay una consulta de búsqueda, use la URL de películas en proyección
                    url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`;
                }

                const res = await fetch(url);
                const data = await res.json();

                if (searchQuery) {
                    setSearchResults(data.results);
                    setTotalPages(data.total_pages);
                } else {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [apiKey, currentPage, searchQuery]);

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

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reinicia la página cuando se realiza una búsqueda
    };

    return (
        <div>
            <h1 className='movies_heading'>🎬 Movies</h1>
            <Search onSearch={handleSearch} /> {/* Agrega el componente Search */}
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className='movies_container'>
                    {(searchQuery ? searchResults : movies).map(movie => (
                        <Link to={'/movies/' + movie.id} key={movie.id} className='link-movies'>
                            <div className='movie_card'>
                                <img className='movie_poster' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title || movie.name} />
                                <p className='movie_title'>{movie.title || movie.name}</p>
                            </div>
                        </Link>
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
