import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const withClientName = ([url, ...args]) => [url.replace(/\/CLIENT(?:\/|$)/i, `/${process.env.REACT_APP_CLIENT_NAME}/`), ...args];

const api = {
  get: (...args) => instance.get.apply(null, withClientName(args)),
  post: (...args) => instance.post.apply(null, withClientName(args)),
};

export default api;
