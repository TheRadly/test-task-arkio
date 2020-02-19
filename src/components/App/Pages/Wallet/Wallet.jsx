import React from 'react';
import WalletCss from './Wallet.module.css';
import GenerateContainer from "./Generate/GenerateContainer";
import ImportContainer from './Import/ImportContainer';

const Wallet = (props) => {
    console.log(props);
    return (
        <div className={WalletCss.wallet}>
            <div className={WalletCss.walletBox}>
                <h1 className={WalletCss.headerWallet}>Wallet</h1>
                <div className={WalletCss.firstLevel}>
                    <button disabled={props.isImportButton} 
                            onClick={() => { 
                                props.importButtonClicked(true);
                                props.generateButtonClicked(false);
                            }}
                            className={WalletCss.walletButton}>
                        Import wallet
                    </button>
                    <button disabled={props.isGenerateButton} 
                            onClick={() => {
                                props.generateButtonClicked(true);
                                props.importButtonClicked(false);
                            }} 
                            className={WalletCss.walletButton}
                    >
                        Generate new wallet
                    </button>
                </div>
                <div className={WalletCss.renderLevel}>
                    { props.isImportButton && <ImportContainer buttonStyle={WalletCss.walletButton}/>}
                    { props.isGenerateButton && <GenerateContainer/> }
                </div>
            </div>
        </div>
    );
};

export default Wallet;
