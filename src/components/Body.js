import PropTypes from 'prop-types';
import iconLocation from '../assets/img/icon-location.svg';
import iconTwitter from '../assets/img/icon-twitter.svg';
import iconWebsite from '../assets/img/icon-website.svg';
import iconCompany from '../assets/img/icon-company.svg';

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
        <img src={avatarUrl} width="80px" height="80px" alt="user avatar" />
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
          <p>
            <span className="accent">{repos}</span>
          </p>
        </div>
        <div className="app-body__stats__followers">
          <p>Followers</p>
          <p>
            <span className="accent">{followers}</span>
          </p>
        </div>
        <div className="app-body__stats__following">
          <p>Following</p>
          <p>
            <span className="accent">{following}</span>
          </p>
        </div>
      </section>
      <section className="app-body__socials">
        <div className="app-body__socials__location">
          <img
            src={iconLocation}
            width="14px"
            height="20px"
            alt="location icon"
          />
          {location && <p>{location}</p>}
          {!location && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__website">
          <img
            src={iconWebsite}
            width="20px"
            height="20px"
            alt="website icon"
          />
          {blog && <p>{blog}</p>}
          {!blog && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__twitter">
          <img
            src={iconTwitter}
            width="20px"
            height="20px"
            alt="twitter icon"
          />
          {twitterUsername && <p>{twitterUsername}</p>}
          {!twitterUsername && <p className="not-available">Not Available</p>}
        </div>
        <div className="app-body__socials__company">
          <img
            src={iconCompany}
            width="20px"
            height="20px"
            alt="company icon"
          />
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
