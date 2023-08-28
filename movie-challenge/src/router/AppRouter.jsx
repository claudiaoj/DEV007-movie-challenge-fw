import { Routes, Route, /*Navigate*/ } from "react-router-dom";
import Trending from "../components/Trending" 
import Layout from "../components/Layout";
import Movies from "../components/movies/Movies";
import MoviesDetails from "../components/movies/MoviesDetails";
// import MoviesDetails from "../components/movies/MoviesDetails";
// import Navbar from "../components/Navbar";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Trending /></Layout>} />
            <Route path="/Trending" element={<Layout><Trending /></Layout> }/>
            <Route path="/Movies" element={<Layout><Movies /></Layout>} />
            <Route path="/movies/:movieId" element={<Layout><MoviesDetails /></Layout>} />
            
            
        </Routes>
    )
}

export default AppRouter;

/*<Route path="/" element={<Navigate to="/Trending"/> } />  para volver 
<Route path="/Navbar" element={<Navbar />} />
*/
/* este código se coloca dentro de router, no funciona
<Route path="/Search/:query" element={<Layout><Movies /></Layout>} />
*/