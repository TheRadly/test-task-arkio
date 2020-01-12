import React from 'react';
import AppCss from './App.module.css';
import Main from './Main/Main';
import Wallet from './Wallet/Wallet'
import { BrowserRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

let App = () => {
  return (
      <BrowserRouter>
          <div className={AppCss.App}>
              <Route path={'/'} exact render={Main}/>
              <Route path={'/wallet'} render={Wallet}/>
          </div>
      </BrowserRouter>
  );
};

export default App;
