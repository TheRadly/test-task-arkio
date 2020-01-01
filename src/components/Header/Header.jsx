import React from 'react';
import HeaderCss from './Header.module.css';
import WalletLogo from './images/IconWallet.png'

let Header = () => {
    return (
        <div className={HeaderCss.Header}>
            <div>
                <a href={'home'}>
                    <img className={HeaderCss.iconLogo} src={WalletLogo} alt={'Wallet logo'}/>
                </a>
            </div>
            <ul className={HeaderCss.navigation}>
                <li><a href={'wallet'}>{'Wallet'}</a></li>
                <li><a href={'home'}>{'Home'}</a></li>
            </ul>
        </div>
    );
};

export default Header;
