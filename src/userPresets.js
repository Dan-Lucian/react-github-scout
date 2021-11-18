const idle = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: 'lorem something is in here but i will not show o',
  blog: 'https://github.blog',
  company: '@github',
  created_at: '2011-01-25T18:44:36Z',
  followers: 4116,
  following: 9,
  location: 'San Francisco',
  login: 'octocat',
  name: 'The Octocat',
  public_repos: 8,
  twitter_username: null,
  html_url: 'https://github.com/octocat',
};

const rejected = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: 'empty',
  followers: 0,
  following: 0,
  name: 'No such user',
  public_repos: 0,
  created_at: '0',
};

const pending = {
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  bio: 'empty',
  followers: 0,
  following: 0,
  name: 'Loading...',
  public_repos: 0,
  created_at: '0',
};

const userPresets = { idle, rejected, pending };

export default userPresets;
