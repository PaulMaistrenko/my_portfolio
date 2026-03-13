import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { useMainContext } from '../../../context/MainContext';


export const LanguageSelector = () => {
  const { language, toggleLanguage } = useMainContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  return (
    <div ref={dropdownRef} className="language-selector">
      <button
        className={classNames('language-selector__item', {
          en: language === 'en',
          uk: language === 'uk',
          de: language === 'de',
        })}
        onClick={toggleDropdownVisibility}
      />
      {isDropdownVisible && (
        <div className="language-selector__dropdown">
          <button
            className={classNames('language-selector__item de', {
              hidden: language === 'de',
            })}
            onClick={() => {
              toggleLanguage('de');
              toggleDropdownVisibility();
            }}
          />
          <button
            className={classNames('language-selector__item uk', {
              hidden: language === 'uk',
            })}
            onClick={() => {
              toggleLanguage('uk');
              toggleDropdownVisibility();
            }}
          />
          <button
            className={classNames('language-selector__item en', {
              hidden: language === 'en',
            })}
            onClick={() => {
              toggleLanguage('en');
              toggleDropdownVisibility();
            }}
          />
        </div>
      )}
    </div>
  );
};
