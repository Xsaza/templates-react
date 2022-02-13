export interface User {
  name: string;
  age: number;
}

export type UserState = User;

export enum UserActionType {
  SET_NAME = '[USER STATE] set name',
  SET_AGE = '[USER STATE] set age',
}

export interface SetName {
  type: UserActionType.SET_NAME,
  payload: string;
}

export interface SetAge {
  type: UserActionType.SET_AGE,
  payload: number;
}

export type UserAction = SetName | SetAge;
