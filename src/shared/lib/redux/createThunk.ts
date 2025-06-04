import { createAsyncThunk, GetThunkAPI, RootState, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

interface AsyncThunkConfig {
  state: RootState;
  rejectValue: ErrorPayload;
  dispatch: ThunkDispatch<RootState, unknown, UnknownAction>;
  extra?: string;
  pendingMeta?: string;
  fulfilledMeta?: string;
  rejectedMeta?: ErrorPayload;
  serializedErrorType?: string;
}

// TODO: fix this
type ErrorPayload = any;

type PayloadCreator<Requested, Returned> = (
  body: Requested,
  thunkApi: GetThunkAPI<AsyncThunkConfig>
) => Promise<Returned>;

export const getCreateThunk =
  <TypeAction extends string, TypeNamespace extends string = string>(typeNamespace: TypeNamespace) =>
  <Requested = void, Returned = void>(typeAction: TypeAction, func: PayloadCreator<Requested, Returned>) =>
    createAsyncThunk<Returned, Requested, AsyncThunkConfig>(
      `${typeNamespace}/${typeAction}`,
      async (body, thunkApi) => {
        try {
          return await func(body, thunkApi);
        } catch (e) {
          return thunkApi.rejectWithValue(e as ErrorPayload);
        }
      }
    );
