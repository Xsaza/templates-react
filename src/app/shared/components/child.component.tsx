import React, { useContext } from 'react';
import { User } from '../store/user/user.model';

import { MyContext } from './main.component';

interface ChildComponentProps {
  user: User;
  makePlusOne: () => void;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ user, makePlusOne }) => {

  const mood = useContext(MyContext);

  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <button onClick={makePlusOne}>make + 1</button>
      <div>my mood is {mood}</div>
    </>
  );
};
