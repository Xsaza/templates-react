import { Reducer } from 'redux';

import { CarState, CarAction, CarActionType } from './car.model';

const initCarState: CarState = {
  color: 'Red',
  model: 'Toyota',
};

export const carReducer: Reducer<CarState, CarAction> = (state = initCarState, action) => {
  switch (action.type) {
    case CarActionType.SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    case CarActionType.SET_MODEL:
      return {
        ...state,
        model: action.payload,
      };

    default:
      return state;
  }
};
