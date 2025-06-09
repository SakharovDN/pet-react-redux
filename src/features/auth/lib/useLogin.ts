import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { useActionListener, useAppDispatch } from '@/shared/lib/redux';

import { LoginRequest } from '../api/types';
import { selectQueryState } from '../model/selectors';
import { login } from '../model/thunks';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const queryState = useSelector((state) => selectQueryState(state, 'login'));

  const dispatchLogin = useCallback((body: LoginRequest) => {
    dispatch(login(body));
  }, []);

  useActionListener(() => navigate('/'), login.fulfilled);

  return [dispatchLogin, queryState] as const;
};
