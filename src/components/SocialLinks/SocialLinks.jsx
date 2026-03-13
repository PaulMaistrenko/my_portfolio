import { Link } from 'react-router-dom';

export const SocialLinks = () => {
  return (
    <div className="social__links">
      <ul className="social__nav-list">
        <li className="social__nav-item">
          <Link
            to="https://www.linkedin.com/in/pavlomaistrenko/"
            className="social__nav-link linkedin"
            target="_blank"
          />
        </li>
        <li className="social__nav-item">
          <Link
            to="https://github.com/PaulMaistrenko"
            className="social__nav-link git-hub"
            target="_blank"
          />
        </li>
      </ul>
    </div>
  );
};
