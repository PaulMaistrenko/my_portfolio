import { useTranslation } from 'react-i18next';

export const StartPage = () => {
  const { t } = useTranslation();

  return (
    <div className="start-page">
      <div className="container">
        <div className="start-page__content">
          <h1 className="start-page__title text-primary">
            I<span>'</span>M <br /> Pavlo Maistrenko
          </h1>
          <p className="start-page__subtitle">{t('position')}</p>
          <p className="text-accent">
            {t('with passion to creating and improving')}
            <span>|</span>
          </p>
        </div>
      </div>
    </div>
  );
};
