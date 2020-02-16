import React from 'react';
import Generate from './Generate';
import {connect} from 'react-redux';
import {generateWalletButtonAC} from '../../../../../redux/reducers/WalletReducer';

let mapStateToProps = (state) => {
    return {
        walletAddress: state.walletPage.walletAddress,
        randomlyPhrases: state.walletPage.randomlyPhrases,
        publicKey: state.publicKey.publicKey
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        generateWallet: () => {
            dispatch(generateWalletButtonAC);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Generate);