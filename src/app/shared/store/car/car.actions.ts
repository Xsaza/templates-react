import { SetColor, SetModel, CarActionType } from './car.model';

export const setCarColor = (payload: string): SetColor => ({
  type: CarActionType.SET_COLOR,
  payload,
});

export const setCarModel = (payload: string): SetModel => ({
  type: CarActionType.SET_MODEL,
  payload,
});
