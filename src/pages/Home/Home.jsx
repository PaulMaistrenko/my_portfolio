import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { StartPage } from '../../pages/StartPage';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
import { LanguageSelector } from '../../components/UI/LanguageSelector';

import { homePageNavItems } from '../../data/homePageNavItems';

export const Home = () => {
  const { setCurrentPage } = useMainContext();
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    scrollToTop();
    setCurrentPage('home');
  });

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('visited');

    if (isFirstVisit) {
      setIsLoading(false);
    } else {
      localStorage.setItem('visited', 'true');
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);

  const handleMenuState = () => {
    scrollToTop();
  };

  return (
    <motion.main
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="home-page">
        {isLoading ? (
          <StartPage isLoading={isLoading} />
        ) : (
          <motion.main
            className="page home-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="home-page__content">
              <div className="home-page__top">
                <h1 className="start-page__title text-primary">
                  I<span>&apos;</span>M <br /> Pavlo Maistrenko
                </h1>
                <p className="start-page__subtitle">Frontend Developer</p>
              </div>
              <nav className="home-page__nav">
                <LanguageSelector />
                <ul className="home-page__nav-list">
                  {homePageNavItems.map((item) => (
                    <li key={item.id} className="home-page__nav-item">
                      <NavLink
                        to={item.href}
                        className="home-page__nav-link"
                        onClick={handleMenuState}
                      >
                        {`.${t(item.label)}`}
                      </NavLink>
                    </li>
                  ))}
                  <button
                    className="home-page__nav-item"
                    onClick={() => {
                      localStorage.removeItem('visited');
                      setIsLoading(true);
                    }}
                  >
                    <p className="home-page__nav-link">
                      <span>.</span>
                      {t('to start')}
                    </p>
                  </button>
                </ul>
                <SocialLinks />
              </nav>
            </div>
          </motion.main>
        )}
      </section>
    </motion.main>
  );
};
