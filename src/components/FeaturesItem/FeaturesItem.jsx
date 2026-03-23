import { useTranslation } from 'react-i18next';
import { FadeInWhenVisible } from '../UI/FadeInWhenVisible/FadeInWhenVisible';

export const FeaturesItem = ({ title, features }) => {
  const { t } = useTranslation();

  return (
    <>
      <FadeInWhenVisible direction="up">
        <div className="feature__content">
          <ul className="feature-content__list">
            <p className="feature__title text-accent">{t(title)}</p>
            {features.map((feature) => (
              <li key={feature} className="feauture-content__item">
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>
      </FadeInWhenVisible>
    </>
  );
};
