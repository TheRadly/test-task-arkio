import React from 'react';
import WalletCss from './Wallet.module.css';
import Import from "./Import/Import";
import Generate from "./Generate/Generate";

const Wallet = () => {
    return (
        <div className={WalletCss.wallet}>
            <div className={WalletCss.walletBox}>
                <h1 className={WalletCss.headerWallet}>Wallet</h1>
                <div className={WalletCss.firstLevel}>
                    <a href={'#'} className={WalletCss.walletButton}>
                        Import wallet
                    </a>
                    <a href={'#'} className={WalletCss.walletButton}>
                        Generate new wallet
                    </a>
                </div>
                <div className={WalletCss.renderLevel}>
                    <Import buttonStyle={WalletCss.walletButton}/>
                    <Generate/>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
