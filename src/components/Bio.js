import PropTypes from 'prop-types';

const Bio = ({ userData }) => {
  const { bio } = userData;
  return <section className="app-body__bio">{bio}</section>;
};
Bio.propTypes = {
  userData: PropTypes.object,
};

export default Bio;
