import './menu-button.scss';

export const MenuButton = ({ setIsMenuOpen }) => {
  const handleButtonState = () => {
    setIsMenuOpen(true);
  }
  return (
    <button
        className="menu__button"
        onClick={handleButtonState}
      >
        <div className="button-box">
          <div className="button-box__element button-box-top"></div>
          <div className="button-box__element button-box-inner"></div>
          <div className="button-box__element button-box-bottom"></div>
        </div>
      </button>
  );
}
