import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { scrollToTop } from '../../utils/scrollToTop';
import { useMainContext } from '../../context/MainContext';

import { BackLink } from '../../components/UI/BackLink/BackLink';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
import { DownloadCvButton } from '../../components/UI/DownloadCvButton/DownloadCvButton';

const FORM_ENDPOINT = 'https://formspree.io/f/xjgalpzl';

export const Contacts = () => {
  const { currentPage, setCurrentPage, country } = useMainContext();
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setStatusMessage('Sending...');

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formPayload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully ✅');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatusMessage('Something went wrong ❌');
      }
    } catch {
      setStatusMessage('Network error ❌');
    } finally {
      setIsLoading(false);
    }
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    scrollToTop();
    setCurrentPage('contacts');
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [currentPage, setCurrentPage]);

  return (
    <motion.main
      className="page contacts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contacts" className="page contacts">
        <div className="container">
          <div className="page-top__wrapper">
            <BackLink />
            <DownloadCvButton />
          </div>

          <h1 className="page__title text-secondary">
            {t('contacts').charAt(0).toUpperCase() + t('contacts').slice(1)}
          </h1>

          <p className="contacts-page__description">
            {t('Always in touch for you...')}
          </p>

          <ul className="contacts-list">
            <div className="grid">
              <li className="contacts-item grid__item--tablet-1-2 grid__item--desktop-2-4">
                <p className="contacts-title text-secondary">
                  {t('Call me...')}
                </p>
                <a
                  href="tel:+4916096294939"
                  className="contacts-link text-accent"
                >
                  {country === 'UA'
                    ? '+38 050 5584254 (WhatsApp, Viber)'
                    : '+49 160 96294939'}
                </a>
              </li>

              <li className="contacts-item grid__item--tablet-1-2 grid__item--desktop-2-4">
                <p className="contacts-title text-secondary">
                  {t('Chat with me on Telegram...')}
                </p>
                <a
                  href="https://t.me/Pavlo_Maistrenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts-link text-accent"
                >
                  @Pavlo_Maistrenko
                </a>
              </li>

              <li className="contacts-item grid__item--tablet-1-2 grid__item--desktop-2-4">
                <p className="contacts-title text-secondary">
                  {t('Drop me a line...')}
                </p>
                <a
                  href="mailto:maystrenko.p@gmail.com"
                  className="contacts-link text-accent"
                >
                  maystrenko.p@gmail.com
                </a>
              </li>

              {!isMobile && (
                <li className="contacts-item grid__item--tablet-1-2 grid__item--desktop-2-4">
                  <p className="contacts-title text-secondary">
                    {t('Follow me...')}
                  </p>
                  <SocialLinks />
                </li>
              )}

              <li className="contacts-item grid__item--tablet-3-4 grid-row--tablet-1-5 grid__item--desktop-5-9">
                <p className="contacts-title text-secondary">
                  {t('or use the form below...')}
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('Your name...')}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('Your e-mail...')}
                    required
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('Your message...')}
                    rows="5"
                    required
                  />

                  <button
                    type="submit"
                    className="contact-form__button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : t('Send')}
                  </button>

                  {statusMessage && (
                    <p className="contact-form__status">{statusMessage}</p>
                  )}
                </form>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </motion.main>
  );
};
