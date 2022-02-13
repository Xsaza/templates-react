import { Reducer } from 'redux';

import { UserState, UserAction, UserActionType } from './user.model';

const initUserState: UserState = {
  age: 0,
  name: '',
};

export const userReducer: Reducer<UserState, UserAction> = (state = initUserState, action) => {
  switch (action.type) {
    case UserActionType.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case UserActionType.SET_AGE:
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
};
