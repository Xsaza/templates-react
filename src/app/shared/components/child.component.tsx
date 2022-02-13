import React from 'react';
import { User } from '../store/user/user.model';

interface ChildComponentProps {
  user: User;
  makePlusOne: () => void;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ user, makePlusOne }) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <button onClick={makePlusOne}>make + 1</button>
    </>
  );
};
