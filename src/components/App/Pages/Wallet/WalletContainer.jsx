import React from 'react';
import Wallet from './Wallet';
import { connect } from 'react-redux';
import { generateButtonClicked } from '../../../../redux/reducers/walletReducer';

class WalletContainer extends React.Component {
    render() {
        return (
            <Wallet {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isGenerateButton: state.walletPage.isGenerateButton
    }
};

export default connect(mapStateToProps, { generateButtonClicked })(WalletContainer);