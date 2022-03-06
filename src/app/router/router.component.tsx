// ROUTER
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { MainComponent } from '../shared/components/main.component';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
      >
        <div>default text</div>
      </Route>
      <Route
        path="/main"
        component={MainComponent}
      ></Route>
    </BrowserRouter>
  );
};
