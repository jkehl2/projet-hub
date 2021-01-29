import axios from 'axios';
import { apiUrl } from 'src/apiConfig/';

import { push } from 'connected-react-router';
import { cleanUserStore } from 'src/store/actions/user';

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default (config, dataLabel, dispatch) => new Promise((resolve, reject) => {
  axios(config).then((response) => {
    if (response.data.data[dataLabel].error) {
      const { error } = response.data.data[dataLabel];
      if (parseInt(error.code, 10) === 1) {
        dispatch(cleanUserStore());
        dispatch(push('/utilisateur/connexion'));
        reject(new Error('Utilisateur non connecté'));
      }
      else {
        reject(new Error(error.msg));
        return;
      }
    }
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});