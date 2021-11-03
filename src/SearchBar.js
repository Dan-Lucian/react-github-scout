import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src="./img/icon-search.svg" alt="Search icon" />
      <input type="text" name="username" />
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
  onSubmit: PropTypes.func,
};

export default SearchBar;
