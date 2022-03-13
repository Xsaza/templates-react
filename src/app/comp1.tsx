import React, { useEffect, useState } from 'react';

const store = {};

function observable(ctx: Object) {
  for (let prop in ctx) {
    // @ts-ignore
    if (typeof ctx[prop] !== 'function') {
      // @ts-ignore
      Object.defineProperty(store, ctx[prop], {
        // @ts-ignore
        get: () => {  }
      });
    }
    else {
      // @ts-ignore
      ctx[prop] = () => {
        // @ts-ignore
        ctx[prop]();

        for (let key in store) {
          // @ts-ignore
          store[key] = ctx[key];
        }
      };
      // store[prop] = ctx[prop].bind(ctx);
    }
  }
}

class Counter {
  current = 0;

  constructor() {
    observable(this);
  }

  increment() {
    this.current++;
    console.log('current is ', this.current);
  }

  decrement() {
    this.current--;
    console.log('current is ', this.current);
  }
}

const counter = new Counter();

function observer(RComp: React.FC): React.FC {

  const storeArr: unknown[] = [];

  for (let key in store) {
    // @ts-ignore
    storeArr.push(store[key]);
  }

  return () => {
    useEffect(() => {
      console.log('from use effect');
    }, [...storeArr]);

    return (
      <><RComp></RComp></>
    );
  }
}

const Comp1: React.FC = observer(() => {

  return (
    <>
      Counter = {counter.current}
      <button onClick={() => { counter.increment() }}>+</button>
      <button onClick={() => { counter.decrement() }}>-</button>
    </>
  );
})

export { Comp1 };
