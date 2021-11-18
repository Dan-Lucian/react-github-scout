import PropTypes from 'prop-types';

const Header = ({ handleThemeChange, theme }) => (
  <header className="header">
    <h1>Github Scout</h1>
    <button
      className="btn btn-theme"
      type="button"
      onClick={handleThemeChange}
      aria-label="change color theme"
    >
      <div className={`theme-icon theme-icon--${theme}`} />
    </button>
  </header>
);

Header.propTypes = {
  handleThemeChange: PropTypes.func,
  theme: PropTypes.string,
};

export default Header;
