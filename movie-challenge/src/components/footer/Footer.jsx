import './footer.css';
import { ImArrowUp } from "react-icons/im";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer_container">
          <ul className="footer_name">
            <li className="footer_item">
              <p>Created by Claudia Ortiz Jabre</p>
            </li>
            <li className="footer_item">
              <button className="button_top" onClick={handleScrollToTop}>
              <p className="up"></p><ImArrowUp/>
              </button>
            </li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
