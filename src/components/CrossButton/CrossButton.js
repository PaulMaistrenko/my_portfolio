import './cross-button.scss';

export const CrossButton = ({ setIsMenuOpen }) => {
  const handleButtonState = () => {
    setIsMenuOpen(false);
  }

  return (
    <button
      className="cross__button"
      onClick={handleButtonState}
    >
      <div className="cross-element cross-element--1"></div>
      <div className="cross-element cross-element--2"></div>
    </button>
  );
}