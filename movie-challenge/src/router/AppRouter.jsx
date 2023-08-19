import { Routes, Route, Navigate } from "react-router-dom";
import Trending from "../components/Trending" 

function AppRouter() {
    return (
        <Routes>
            <Route path="/Trending" element={<Trending />} />
            
            <Route path="/*" element={<Navigate to="/Trending"/> } />
        </Routes>
    )
}

export default AppRouter;