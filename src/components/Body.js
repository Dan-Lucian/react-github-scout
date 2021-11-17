import PropTypes from 'prop-types';
import ProfileHead from './ProfileHead';
import Bio from './Bio';
import Stats from './Stats';
import Socials from './Socials';
import userPresets from '../userPresets';

const Body = ({ userData, status }) => {
  let userDataByStatus;

  switch (status) {
    case 'rejected':
      userDataByStatus = { ...userPresets.error };
      break;

    case 'idle':
      userDataByStatus = { ...userPresets.octocat };
      break;

    case 'resolved':
      userDataByStatus = { ...userData };
      break;

    case 'pending':
      userDataByStatus = { ...userPresets.pending };
      break;

    default:
      userDataByStatus = { ...userPresets.error };
      console.log('no such switch case');
  }

  return (
    <main className="app-body">
      <ProfileHead userData={userDataByStatus} />
      <Bio userData={userDataByStatus} />
      <Stats userData={userDataByStatus} />
      <Socials userData={userDataByStatus} />
    </main>
  );
};
Body.propTypes = {
  userData: PropTypes.object,
  status: PropTypes.string,
};

export default Body;
