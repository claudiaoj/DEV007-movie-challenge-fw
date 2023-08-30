import '../components/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="navbar">
            <div className='nav_logo'>
                <img src="./public/logo-cinema.png" alt="" />
            </div>
            <div className="nav_items">
                <Link to="/">Home</Link>
                <Link to="/Movies">Movies</Link>
            </div>

            <hr className='nav_line' />

        </header>
    )


}

export default Navbar;
