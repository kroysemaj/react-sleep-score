import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000',
});

const api = {
  saveSleepScore(sleepScore) {
    return client
      .post('/sleep-score/save', { sleepScore })
      .then(response => response.data);
  },
};

export default api;
