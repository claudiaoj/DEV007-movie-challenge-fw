import Navbar from "../components/Navbar";
import PropTypes from "prop-types"; // Importa PropTypes

function Layout({ children }) {
    return (
    <div>
        <Navbar />
        <div className="content-container">
        {children}
        </div>
    </div>
    );
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que children sea un nodo válido
};

export default Layout;