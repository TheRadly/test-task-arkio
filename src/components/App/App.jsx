import React from 'react';
import AppCss from './App.module.css';
import Main from './Pages/Main/Main';
import WalletContainer from './Pages/Wallet/WalletContainer'
import { Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
        <div className={AppCss.App}>
            <Route path={'/'} exact render={ () => <Main/> }/>
            <Route path={'/wallet'} render={ () => <WalletContainer/> }/>
        </div>
  );
};

export default App;
