import { useTranslation } from 'react-i18next';

export const DownloadCvButton = () => {
  const { t } = useTranslation();

  return (
    <div
      className="cv-button text-accent"
    >
      <span>{t('download cv')}</span>
      <a
        href="/files/CV-Frontend-Pavlo-Maistrenko.pdf"
        download="CV-Frontend-Pavlo-Maistrenko.pdf"
        className="cv-download-link"
        aria-label="Download CV"
      ></a>
    </div>
  );
};
