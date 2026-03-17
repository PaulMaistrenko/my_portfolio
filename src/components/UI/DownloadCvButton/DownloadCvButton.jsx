import { useTranslation } from 'react-i18next';
import { useMainContext } from '../../../context/MainContext';
import { useState } from 'react';

export const DownloadCvButton = () => {
  const { language, country } = useMainContext();
  const [showSubButtons, setShowSubButtons] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="cv-button text-accent"
      onMouseEnter={() => setShowSubButtons(true)}
      onMouseLeave={() => setShowSubButtons(false)}
    >
      <span>{t('download cv')}</span>
      {language === 'en' && (
        <a
          href="/files/CV Frontend Pavlo Maistrenko en ww.pdf"
          download="CV Frontend Pavlo Maistrenko en ww.pdf"
          className="cv-download-link"
        ></a>
      )}
      {language === 'de' && (
        <a
          href="/files/CV Frontend Pavlo Maistrenko de ww.pdf"
          download="CV Frontend Pavlo Maistrenko de ww.pdf"
          className="cv-download-link"
        ></a>
      )}
      {language === 'uk' && (
        <a
          href="/files/CV Frontend Pavlo Maistrenko ua.pdf"
          download="CV Frontend Pavlo Maistrenko ua.pdf"
          className="cv-download-link"
        ></a>
      )}
      {showSubButtons && language === 'en' && (
        <>
          {country === 'DE' && (
            <>
              <a
                href="/files/CV Frontend Pavlo Maistrenko en ww.pdf"
                download="CV Frontend Pavlo Maistrenko en ww.pdf"
                className="sub-button left-subbutton"
              >
                en
              </a>
              <a
                href="/files/CV Frontend Pavlo Maistrenko de ww.pdf"
                download="CV Frontend Pavlo Maistrenko de ww.pdf"
                className="sub-button right-subbutton"
              >
                de
              </a>
            </>
          )}
          {country === 'UA' && (
            <>
              <a
                href="/files/CV Frontend Pavlo Maistrenko en ua.pdf"
                download="CV Frontend Pavlo Maistrenko en ua.pdf"
                className="sub-button left-subbutton"
              >
                en
              </a>
              <a
                href="/files/CV Frontend Pavlo Maistrenko ua.pdf"
                download="CV Frontend Pavlo Maistrenko ua.pdf"
                className="sub-button right-subbutton"
              >
                ua
              </a>
            </>
          )}
        </>
      )}
    </div>
  );
};
