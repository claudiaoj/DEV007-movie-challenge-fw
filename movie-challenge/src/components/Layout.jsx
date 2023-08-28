import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

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
    children: PropTypes.node.isRequired, 
};

export default Layout;

