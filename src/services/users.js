import axios from 'axios';

const baseUrl = 'https://api.github.com/users';

const get = (userName) => {
  const request = axios.get(`${baseUrl}/${userName}`);
  return request.then((res) => res.data);
};

const users = { get };
export default users;
