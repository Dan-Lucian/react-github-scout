import PropTypes from 'prop-types';
import iconLocation from '../assets/img/icon-location.svg';
import iconTwitter from '../assets/img/icon-twitter.svg';
import iconWebsite from '../assets/img/icon-website.svg';
import iconCompany from '../assets/img/icon-company.svg';

const Socials = ({ userData }) => {
  const {
    company,
    blog,
    location,
    twitter_username: twitterUsername,
  } = userData;

  return (
    <section className="app-body__socials">
      <article className="app-body__socials__left">
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
      </article>
      <article className="app-body__socials__right">
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
      </article>
    </section>
  );
};

export default Socials;
Socials.propTypes = {
  userData: PropTypes.object,
};
