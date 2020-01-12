import React from 'react';
import WalletCss from './Wallet.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let Wallet = () => {
    return (
        <div className={WalletCss.wallet}>
            <div className={WalletCss.walletBox}>
                <h1 className={WalletCss.headerWallet}>Wallet</h1>
                <div className={WalletCss.firstLevel}>
                    <a href={'/api/import'} className={WalletCss.importButton}>
                        {'Import wallet'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
