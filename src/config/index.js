const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://paesflix.herokuapp.com';

export default {
  URL,
};
