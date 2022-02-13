import { SetAge, SetName, UserActionType } from './user.model';

export const setUserName = (payload: string): SetName => ({
  type: UserActionType.SET_NAME,
  payload,
});

export const setUserAge = (payload: number): SetAge => ({
  type: UserActionType.SET_AGE,
  payload,
});
