/* eslint-disable no-underscore-dangle */
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
      if (!!token && token.trim() !== '') {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const manageRefreshToken = (response, dispatch) => {
  const originalRequest = response.config;
  if (!originalRequest._retry) {
    originalRequest._retry = true;
    localStorage.setItem('token', '');
    const configToken = {
      method: 'post',
      url: `${apiUrl}/token`,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      data: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }),
    };
    return axios(configToken)
      .then((response2) => {
        if (response2.status === 201) {
          localStorage.setItem('token', response2.data.token);
          return axios(originalRequest);
        }
        dispatch(cleanUserStore());
        dispatch(push('/utilisateur/connexion'));
        return Promise.reject(new Error('Utilisateur non connecté'));
      });
  }
  dispatch(push('/utilisateur/connexion'));
  return Promise.reject(new Error('Utilisateur non connecté'));
};

export default (config, dataLabel, dispatch) => axios(config).then((response) => {
  if (response.data.errors) {
    const { errors } = response.data;
    const error = errors[0];
    if (parseInt(error.code, 10) === 1) {
      return manageRefreshToken(response, dispatch);
    }
    return Promise.reject(new Error(error.message));
  }
  if (response.data.error) {
    const { error } = response.data;
    if (parseInt(error.code, 10) === 1) {
      return manageRefreshToken(response, dispatch);
    }
    return Promise.reject(new Error(error.msg));
  }
  if (response.data.data) {
    if (response.data.data[dataLabel] && response.data.data[dataLabel].error) {
      const { error } = response.data.data[dataLabel];
      if (parseInt(error.code, 10) === 1) {
        return manageRefreshToken(response, dispatch);
      }
      return Promise.reject(new Error(error.msg));
    }
  }

  return Promise.resolve(response);
})
  .catch((error) => (
    Promise.reject(error)
  ));
