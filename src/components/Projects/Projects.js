import { projects } from '../../variables/projects';
import { ProjectsItem } from '../ProjectsItem';
import './projects.scss';

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects__content">
          <ul className="projects__list">
            { projects.map(project => (
              <li className="projects__item" key={project.title}>
                <ProjectsItem project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
