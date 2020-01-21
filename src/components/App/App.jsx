import React from 'react';
import AppCss from './App.module.css';
import Main from './Pages/Main/Main';
import Wallet from './Pages/Wallet/Wallet'
import { BrowserRouter, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
      <BrowserRouter>
          <div className={AppCss.App}>
              <Route path={'/'} exact render={Main}/>
              <Route state={props.state} path={'/wallet'} render={Wallet}/>
          </div>
      </BrowserRouter>
  );
};

export default App;
