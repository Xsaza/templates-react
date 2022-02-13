import { combineReducers } from 'redux';

import { carReducer } from './car/car.reducer';
import { CarState } from './car/car.model';

import { userReducer } from './user/user.reducer';
import { UserState } from './user/user.model';

export interface RootReducer {
  userState: UserState;
  carState: CarState;
}

export const rootReducer = combineReducers<RootReducer>({
  userState: userReducer,
  carState: carReducer,
});
