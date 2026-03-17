import { useTranslation } from "react-i18next";

export const FeaturesItem = ({ title, features }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="features-item__top">
        <p className="feature__title text-accent">{t(title)}</p>
      </div>
      <div className="feature__content">
        <ul className="feature-content__list">
          {features.map((feature) => (
            <li key={feature} className="feauture-content__item">
              {t(feature)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
