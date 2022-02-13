import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootReducer } from '../store/root.reducer';
import { setUserAge, setUserName } from '../store/user/user.actions';

import { ChildComponent } from './child.component';


export const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<RootReducer, RootReducer['userState']>((store) => store.userState);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    dispatch(setUserAge(25));
    dispatch(setUserName('Oleg'));
  }, []);

  const makePlusOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      this is main component!
      <ChildComponent
        user={user}
        makePlusOne={makePlusOne}
      ></ChildComponent>
      <div>this is counter: {counter}</div>
    </div>
  );
};
