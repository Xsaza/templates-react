export interface Car {
  model: string;
  color: string;
}

export type CarState = Car;

export enum CarActionType {
  SET_MODEL = '[CAR STATE] set model',
  SET_COLOR = '[CAR STATE] set color',
}

export interface SetModel {
  type: CarActionType.SET_MODEL;
  payload: string;
}

export interface SetColor {
  type: CarActionType.SET_COLOR;
  payload: string;
}

export type CarAction = SetModel | SetColor;
