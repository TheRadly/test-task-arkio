import React from 'react';
import AppCss from './App.module.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

let App = () => {
  return (
      <div className={AppCss.App}>
          <div className={'d-flex justify-content-center'}>
              <h1>
                  {'Test task for '}
                  <a href={'https://ark.io/'}>{'ARK.io'}</a>
              </h1>
          </div>
          <div className={'d-flex justify-content-center'}>
              <h2>
                  {'To get started, click on "Wallet" in the navigation bar. Read more in '}
                  <a href={'https://github.com/TheRadly/test-task-arkio/blob/master/README.md'}>{'README.md'}</a>
              </h2>
          </div>
      </div>
  );
};

export default App;
