import { ProjectsItem } from '../ProjectsItem';
import './projects.scss';

export const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects__content">
          <ul className="projects__list">
            <li className="projects__item">
              <ProjectsItem />
            </li>
            <li className="projects__item">
              <ProjectsItem />
            </li>
            <li className="projects__item">
              <ProjectsItem />
            </li>
            <li className="projects__item">
              <ProjectsItem />
            </li>
            <li className="projects__item">
              <ProjectsItem />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
