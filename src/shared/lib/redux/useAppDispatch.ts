import { useDispatch } from 'react-redux';

import { AppDispatch } from '@reduxjs/toolkit';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
