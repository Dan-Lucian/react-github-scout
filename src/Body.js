import PropTypes from 'prop-types';

const Body = ({ userData }) => {
  const {
    avatar_url: avatarUrl,
    login,
    followers,
    following,
    html_url: profileUrl,
    name,
    company,
    blog,
    location,
    bio,
    public_repos: repos,
    twitter_username: twitterUsername,
    created_at: createdAt,
  } = userData;

  const formatTime = (time) => {
    console.log(time);
    return 'Time is in console';
  };

  return (
    <main className="app-body">
      <section className="app-body__profile">
        <img src={avatarUrl} alt="user avatar" />
        <div className="app-body__profile__info">
          <h3>{name}</h3>
          <p>
            <a href={profileUrl}>{login}</a>
          </p>
          <p>{formatTime(createdAt)}</p>
        </div>
      </section>
      <section className="app-body__bio">{bio}</section>
      <section className="app-body__stats">
        <div className="app-body__stats__repos">
          <p>Repos</p>
          <p>{repos}</p>
        </div>
        <div className="app-body__stats__followers">
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div className="app-body__stats__following">
          <p>Following</p>
          <p>{following}</p>
        </div>
      </section>
      <section className="app-body__socials">
        <div className="app-body__socials__address">
          <img src="./assets/img/icon-location.svg" alt="location icon" />
          {location && <p>{location}</p>}
          {!location && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__website">
          <img src="./assets/img/icon-website.svg" alt="website icon" />
          {blog && <p>{blog}</p>}
          {!blog && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__twitter">
          <img src="./assets/img/icon-twitter.svg" alt="twitter icon" />
          {twitterUsername && <p>{twitterUsername}</p>}
          {!twitterUsername && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__company">
          <img src="./assets/img/icon-company.svg" alt="company icon" />
          {company && <p>{company}</p>}
          {!company && <p className="not-available">Not Available</p>}
        </div>
      </section>
    </main>
  );
};
Body.propTypes = {
  userData: PropTypes.object,
};

export default Body;
