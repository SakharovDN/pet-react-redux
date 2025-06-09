import axios, { AxiosError } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import { environment } from '../config';

import { ErrorPayload } from './types';

const axiosInstance = axios.create({
  baseURL: environment.baseApiUrl,
  withCredentials: true,
  paramsSerializer: { indexes: null },
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    if (!error?.response) {
      return Promise.reject('Unknown error');
    }

    return Promise.reject<ErrorPayload>({
      status: error.response.status,
      method: error.response.config.method,
      message: error.response.statusText,
      payload: error.response.config.data,
      data: error.response.data,
      url: error.response.config.url,
    });
  }
);

const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 1000 });

mock.onPost('/auth/login').reply(200, { token: '123' });

export default axiosInstance;
