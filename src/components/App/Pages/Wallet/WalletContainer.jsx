import React from 'react';
import Wallet from './Wallet';
import { connect } from 'react-redux';
import { generateButtonClicked, importButtonClicked } from '../../../../redux/reducers/walletReducer';

class WalletContainer extends React.Component {
    render() {
        return (
            <Wallet {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isGenerateButton: state.walletPage.isGenerateButton,
        isImportButton: state.walletPage.isImportButton
    }
};

export default connect(mapStateToProps, { generateButtonClicked, importButtonClicked })(WalletContainer);