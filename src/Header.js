import PropTypes from 'prop-types';

const Header = ({ onClick, theme }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <header className="header">
      <h1>Github Scout</h1>
      <button className="btn btn-theme" type="button" onClick={handleClick}>
        <div className={`theme-icon theme-icon--${theme}`} />
      </button>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

export default Header;
