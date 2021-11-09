import PropTypes from 'prop-types';
import ProfileHead from './ProfileHead';
import Bio from './Bio';
import Stats from './Stats';
import Socials from './Socials';

const Body = ({ userData }) => (
  <main className="app-body">
    <ProfileHead userData={userData} />
    <Bio userData={userData} />
    <Stats userData={userData} />
    <Socials userData={userData} />
  </main>
);
Body.propTypes = {
  userData: PropTypes.object,
};

export default Body;
