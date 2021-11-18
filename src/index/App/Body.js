import PropTypes from 'prop-types';
import ProfileHead from './Body/ProfileHead';
import Bio from './Body/Bio';
import Stats from './Body/Stats';
import Socials from './Body/Socials';
import userPresets from './Body/userPresets';

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
