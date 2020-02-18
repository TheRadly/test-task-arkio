import React from 'react';
import WalletCss from './Wallet.module.css';
import Import from "./Import/Import";
import GenerateContainer from "./Generate/GenerateContainer";

const Wallet = (props) => {
    return (
        <div className={WalletCss.wallet}>
            <div className={WalletCss.walletBox}>
                <h1 className={WalletCss.headerWallet}>Wallet</h1>
                <div className={WalletCss.firstLevel}>
                    <button className={WalletCss.walletButton}>
                        Import wallet
                    </button>
                    <button onClick={() => props.generateButtonClicked(true)} className={WalletCss.walletButton}>
                        Generate new wallet
                    </button>
                </div>
                <div className={WalletCss.renderLevel}>
                    <Import buttonStyle={WalletCss.walletButton}/>
                    { props.isGenerateButton === true && <GenerateContainer/> }
                </div>
            </div>
        </div>
    );
};

export default Wallet;
