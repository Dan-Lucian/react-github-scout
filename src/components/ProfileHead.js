import PropTypes from 'prop-types';

const ProfileHead = ({ userData }) => {
  const {
    created_at: createdAt,
    avatar_url: avatarUrl,
    html_url: profileUrl,
    login,
    name,
  } = userData;

  const formatTime = (time) => {
    console.log(time);
    return 'Time is in console';
  };

  return (
    <section className="app-body__profile">
      <img src={avatarUrl} width="80px" height="80px" alt="user avatar" />
      <div className="app-body__profile__info">
        <h1>{name}</h1>
        <p>
          <a href={profileUrl}>{login}</a>
        </p>
        <p>{formatTime(createdAt)}</p>
      </div>
    </section>
  );
};

ProfileHead.propTypes = {
  userData: PropTypes.object,
};

export default ProfileHead;
