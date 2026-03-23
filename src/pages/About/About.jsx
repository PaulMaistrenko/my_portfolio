import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from '../../components/UI/FadeInWhenVisible/FadeInWhenVisible';
import classNames from 'classnames';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { BackLink } from '../../components/UI/BackLink/BackLink';
import { DownloadCvButton } from '../../components/UI/DownloadCvButton/DownloadCvButton';
import { FeaturesItem } from '../../components/FeaturesItem/FeaturesItem';

import { featuresData } from '../../data/aboutPageFeatures';

export const About = () => {
  const { setCurrentPage } = useMainContext();
  const [isMoreInfoOpen, setMoreInfoOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

  useEffect(() => {
    scrollToTop();
    setCurrentPage('about');
    if (!isMobile) {
      setMoreInfoOpen(true);
    }
  }, [isMobile, setCurrentPage]);

  return (
    <motion.main
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section id="about" className="page about">
        <div className="container">
          <div className="page-top__wrapper">
            <BackLink />
          </div>
          <h1 className="page__title text-secondary">
            {t('about').charAt(0).toUpperCase() + t('about').slice(1)}
          </h1>
          <div className="grid">
            <div className="about-page-image__wrapper grid__item--tablet-1-2 grid__item--desktop-1-3">
              <FadeInWhenVisible direction="right">
                <div className="about-page__image"></div>
              </FadeInWhenVisible>
            </div>

            <div className="greeting__block grid__item--tablet-3-4 grid__item--desktop-5-9">
              <p className="greeting text-accent">{t('gretings')}</p>
              <p className="name text-primary">{t('name')}</p>
            </div>
            <article className="short-description text-secondary grid__item--tablet-1-2 grid__item--desktop-5-8">
              {t('short description')}
              <button
                onClick={() => setMoreInfoOpen(true)}
                className={classNames(
                  'additional-information__button text-accent on-tablet--hidden',
                  {
                    'button--hidden': isMoreInfoOpen,
                  }
                )}
              >
                <span>...</span>
                {t('more')}
              </button>
            </article>
            <article
              className={classNames(
                'additional-information grid__item--tablet-1-2 grid__item--desktop-2-8',
                {
                  hidden: !isMoreInfoOpen,
                }
              )}
            >
              <h2 className="additional-information__title text-primary">
                {t('additional information title')}
              </h2>
              <p className="additional-information__text text-secondary ">
                {t('additional information')}
                <button
                  onClick={() => setMoreInfoOpen(false)}
                  className="additional-information__button text-accent on-tablet--hidden"
                >
                  <span>...</span>
                  {t('less')}
                </button>
              </p>
            </article>
            <div className="features-content__wrapper grid__item--tablet-3-4 grid__item--desktop-1-9">
              <ul className="features__list ">
                {featuresData.map((item) => (
                  <li className="features__item" key={item.id}>
                    <FeaturesItem title={item.title} features={item.features} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {isMobile && <DownloadCvButton />}
        </div>
      </section>
    </motion.main>
  );
};
