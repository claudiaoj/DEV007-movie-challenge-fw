import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import { ImSearch } from "react-icons/im";

function Search({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
    const apiKey = 'e76e43be11ae30706e80f301fd5ccfee';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=1`;

    onSearch(url);
    };

    return (
    <div className="search_container">
        <input
            type="text"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search_input"
        />
        <button className="search_button" onClick={handleSearch}><ImSearch/></button>
        </div>
    );
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Search;
