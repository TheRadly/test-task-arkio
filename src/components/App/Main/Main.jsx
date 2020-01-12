import React from 'react';
import MainCss from './Main.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let Main = () => {
    return (
        <div className={MainCss.Main}>
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

export default Main;
