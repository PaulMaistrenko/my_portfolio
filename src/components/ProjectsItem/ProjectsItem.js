import { Link } from 'react-router-dom';
import './project-item.scss';
import  DIA_landing from '../../assets/img/blocks/projects/DIA_landing.png';

export const ProjectsItem = () => {
  return (
    <div className="project-card">
      <div className="project__info">
        <div className="project__top">
          <h3 className="project__title">Strategic Agency</h3>
          <div className="links">
          <Link
            to="https://paulmaistrenko.github.io/layout_dia/"
            className="project__link demo__link icon"
            target='_blank'
          />
          <Link
            to="https://github.com/PaulMaistrenko/layout_dia"
            className="project__link code__link icon"
            target='_blank'
          />
        </div>
        </div>
          <p className="project__description">The pixel-perfect responsive landing page.</p>
          <ul className="project__technologies">
            <li className="technologies__item">JavaScript</li>
            <li className="technologies__item">React</li>
            <li className="technologies__item">HTML</li>
            <li className="technologies__item">SCSS</li>
            <li className="technologies__item">FIGMA</li>
          </ul>
        </div>
        <img
          src={DIA_landing}
          alt="Strategic Agency"
          className="card__img"
        />
    </div>
  );
}
