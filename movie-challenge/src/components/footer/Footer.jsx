import './footer.css';

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
              <p className="up"></p>⬆
              </button>
            </li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
