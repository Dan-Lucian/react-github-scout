import PropTypes from 'prop-types';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ProfileHead = ({ userData }) => {
  const {
    created_at: createdAt,
    avatar_url: avatarUrl,
    html_url: profileUrl,
    login,
    name,
  } = userData;

  const getFormattedTime = (time) => {
    const date = new Date(time);
    const text =
      `Joined ${date.getUTCDate()} ` +
      `${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

    return text;
  };

  return (
    <section className="app-body__profile">
      <img src={avatarUrl} width="80px" height="80px" alt="user avatar" />
      <div className="app-body__profile__info">
        <h1>{name}</h1>
        <p>
          <a href={profileUrl}>{login}</a>
        </p>
        <p className="app-body__profile__info__joined">
          {getFormattedTime(createdAt)}
        </p>
      </div>
    </section>
  );
};

ProfileHead.propTypes = {
  userData: PropTypes.object,
};

export default ProfileHead;
