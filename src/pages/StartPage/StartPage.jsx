import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const StartPage = () => {
  const { t } = useTranslation();

  return (
    <motion.main
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="start-page">
        <div className="container">
          <div className="start-page__content">
            <h1 className="start-page__title text-primary">
              I<span>&apos;</span>M <br /> Pavlo Maistrenko
            </h1>
            <p className="start-page__subtitle">{t('position')}</p>
            <p className="text-accent">
              {t('with passion to creating and improving')}
              <span>|</span>
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
