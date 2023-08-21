import { Routes, Route, /*Navigate*/ } from "react-router-dom";
import Trending from "../components/Trending" 
import Layout from "../components/Layout";
import Movies from "../components/movies/Movies";




// import Navbar from "../components/Navbar";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Trending /></Layout>} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Movies" element={<Layout><Movies /></Layout>} />
            
            
        </Routes>
    )
}

export default AppRouter;

/*<Route path="/" element={<Navigate to="/Trending"/> } />  para volver 
<Route path="/Navbar" element={<Navbar />} />
*/
/* este cosigo se coloca dentro de router para mostrar la busqueda, no funciona
<Route path="/Search/:query" element={<Layout><Movies /></Layout>} />
*/