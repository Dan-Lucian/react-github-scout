import PropTypes from 'prop-types';

const Stats = ({ userData }) => {
  const { followers, following, public_repos: repos } = userData;

  return (
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
  );
};
Stats.propTypes = {
  userData: PropTypes.object,
};

export default Stats;
