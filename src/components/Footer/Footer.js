import { Link } from "react-router-dom";
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link
            to="https://github.com/PaulMaistrenko"
            className="footer__link icon git-hub"
            target="_blank"
            rel="noreferrer"
          />
          <Link
            to="https://www.linkedin.com/in/pavlomaistrenko/"
            className="footer__link icon linked-in"
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </div>
    </footer>
  );
}
