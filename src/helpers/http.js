import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';

const baseConfiguration = {
  baseURL: `${process.env.API_URL}/api`,
  timeout: 5000,
  headers: {},
  xsrfCookieName: '_csrf',
  withCredentials: true
};

export default axios.create(baseConfiguration);
