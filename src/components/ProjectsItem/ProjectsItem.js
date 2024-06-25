import { Link } from 'react-router-dom';
import './project-item.scss';
//import  DIA_landing from '../../assets/img/blocks/projects/DIA_landing.png';

export const ProjectsItem = ({ project }) => {
  const {
    description,
    title,
    demo,
    code,
    technologies,
    image,
  } = project;

  return (
    <div className="project-card">
      <div className="project__info">
        <div className="project__top">
          <h3 className="project__title">{title}</h3>
          <div className="links">
            <Link
              to={demo}
              className="project__link demo__link icon"
              target='_blank'
            />
            <Link
              to={code}
              className="project__link code__link icon"
              target='_blank'
            />
          </div>
        </div>
        <p className="project__description">{description}</p>
        <ul className="project__technologies">
          { technologies.map(item => (
            <li className="technologies__item" key={item}>{item}</li>
          ))}
        </ul>
      </div>
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={title}
          className="card__img"
        />
    </div>
  );
}
