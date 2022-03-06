import React from 'react';
import '../styles/main.scss';
import { Router } from './router/router.component';

export const AppComponent = () => {

  return (
    <>
      <div>this is header in app component!</div>
      <Router></Router>
    </>
  )
};
