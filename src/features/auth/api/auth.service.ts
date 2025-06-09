import axiosInstance from '@/shared/api';

import { LoginRequest } from './types';

class AuthService {
  private readonly apiEndpoint = '/auth';

  login = (body: LoginRequest) => {
    return axiosInstance.post(`${this.apiEndpoint}/login`, body).then((res) => res.data);
  };
}

export default new AuthService();
