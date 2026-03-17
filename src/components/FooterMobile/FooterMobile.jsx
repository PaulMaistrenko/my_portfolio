import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { scrollToTop } from '../../utils/scrollToTop';

import { useMainContext } from '../../context/MainContext';

import { CreaterInfo } from '../CreaterInfo/CreaterInfo';

export const FooterMobile = () => {
  const {currentPage} = useMainContext();
  const { t } = useTranslation();

  return (
    <div className="footer-mobile">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <Link to="/" className="footer__nav-link">.{t('menu')}</Link>
          </li>
          <li className="footer__nav-item">
            {currentPage === 'about' && <Link to="/projects" className="footer__nav-link">.{t('projects')}</Link>}
            {currentPage === 'projects' && <Link to="/contacts" className="footer__nav-link">.{t('contacts')}</Link>}
            {currentPage === 'contacts' && <Link to="/about" className="footer__nav-link">.{t('about')}</Link>}
          </li>
          <li className="footer__nav-item">
            <button onClick={() => scrollToTop()} className="footer__nav-link">.{t('to top')}</button>
          </li>
        </ul>
      </nav>
      <CreaterInfo />
    </div>
  );
};
