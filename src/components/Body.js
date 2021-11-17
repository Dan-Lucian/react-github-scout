import PropTypes from 'prop-types';
import ProfileHead from './ProfileHead';
import Bio from './Bio';
import Stats from './Stats';
import Socials from './Socials';
import userPresets from '../userPresets';

const Body = ({ userData, status }) => {
  const copyUserPresets = JSON.parse(JSON.stringify(userPresets));
  copyUserPresets.resolved = { ...userData };

  return (
    <main className="app-body">
      <ProfileHead userData={copyUserPresets[status]} />
      <Bio userData={copyUserPresets[status]} />
      <Stats userData={copyUserPresets[status]} />
      <Socials userData={copyUserPresets[status]} />
    </main>
  );
};
Body.propTypes = {
  userData: PropTypes.object,
  status: PropTypes.string,
};

export default Body;
