import { NavLink } from "react-router-dom";

export const Header = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <header className="header container">
      <div className="nav-row">
        <NavLink to="/" className="logo">
          <strong>My</strong> portfolio
        </NavLink>
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
              About me
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
              Projects
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
              Contacts
            </NavLink>
          </li>
        </ul>
        <NavLink to="/menu-page" className="menu-open icon"></NavLink>
      </div>
    </header>
  );
}