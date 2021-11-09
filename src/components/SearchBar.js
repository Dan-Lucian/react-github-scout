import PropTypes from 'prop-types';
import iconSearch from '../assets/img/icon-search.svg';

const SearchBar = ({ onSubmit, userName, handleUserChange }) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <img width="20px" height="20px" src={iconSearch} alt="Search icon" />
      <input
        className="searchbar__input"
        type="text"
        name="username"
        placeholder="Search by username"
        value={userName}
        onChange={handleUserChange}
      />
      <input
        className="btn btn-submit"
        type="submit"
        name="btnSubmit"
        value="Search"
      />
    </form>
  );
};
SearchBar.propTypes = {
  userName: PropTypes.string,
  onSubmit: PropTypes.func,
  handleUserChange: PropTypes.func,
};

export default SearchBar;
