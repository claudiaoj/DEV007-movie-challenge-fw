import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import Footer from "./footer/Footer";


function Layout({ children }) {
    return (
    <div>
        <Navbar />
        <div className="content-container">
            {children}
        </div>
        <Footer /> 
    </div>
    );
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default Layout;

