import React, { useDebugValue, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootReducer } from '../store/root.reducer';
import { setUserAge, setUserName } from '../store/user/user.actions';

import { ChildComponent } from './child.component';

export const MyContext = React.createContext('some value');
console.log(MyContext.Provider);

function useMyHook() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    setUserName('Yana');
  }, []);

  useDebugValue(userName ?? 'loading...');

  return userName;
}

export const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<RootReducer, RootReducer['userState']>(store => store.userState);
  const [counter, setCounter] = useState<number>(0);

  // const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    dispatch(setUserAge(25));
    dispatch(setUserName('Oleg'));
  }, []);

  const makePlusOne = () => {
    setCounter(counter + 1);
  };

  const userName = useMyHook();

  // const expensiveCount = useMemo(() => {
  //   console.log('from memo');
  //   return counter ** 2;
  // }, [counter]);

  // const someFunc = () => {
  //   if (!buttonRef.current) return;

  //   buttonRef.current.click();
  // };

  // const someFunc2 = () => {() {}
  //   console.log('lol');
  // };

  return (
    <div>
      this is main component!
      <MyContext.Provider value="sad mood">
        <ChildComponent
          user={user}
          makePlusOne={makePlusOne}
        ></ChildComponent>
      </MyContext.Provider>
      <div>this is counter: {counter}</div>
      <br />
      <div>value from my hook: {userName}</div>
      {/* <button ref={buttonRef} onClick={makePlusOne}>click me</button> */}
      {/* <button onClick={someFunc}>click me!</button> */}
      {/* <div>expensive count result: {expensiveCount}</div> */}
      {/* <button onClick={someFunc2}>click</button> */}
    </div>
  );
};
