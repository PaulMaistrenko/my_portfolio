import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { BackLink } from '../../components/UI/BackLink/BackLink';
import { ProjectsPageItem } from '../../components/ProjectsPageItem/ProjectsPageItem';

import { projectsData } from '../../data/projectsData';
import { DownloadCvButton } from '../../components/UI/DownloadCvButton/DownloadCvButton';

export const Projects = () => {
  const { setCurrentPage } = useMainContext();
  const { t } = useTranslation();

  useEffect(() => {
    scrollToTop();
    setCurrentPage('projects');
  });

  return (
    <motion.main
      className="page projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section id="projects" className="page projects">
        <div className="container">
          <div className="page-top__wrapper">
            <BackLink />
            <DownloadCvButton />
          </div>
          <h1 className="page__title text-secondary">
            {t('projects').charAt(0).toUpperCase() + t('projects').slice(1)}
          </h1>
          <article className="projects-page__description text-secondary">
            {t('projects page description part 1')}{' '}
            <span className="text-accent">
              {t('projects page description part 2')}
            </span>{' '}
            {t('projects page description part 3')}
          </article>

          <ul className="projects-page-list">
            {projectsData.map((projectsItem) => (
              <li className="projects-page-item" key={projectsItem.id}>
                <ProjectsPageItem projectsItem={projectsItem} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.main>
  );
};
