import React from 'react';
import { connect } from 'react-redux';
import { generateButtonClicked, importWallet, importButtonClicked } from '../../../../../redux/reducers/walletReducer';
import Import from './Import';

class ImportContainer extends React.Component {
    sendAddress(props) {

    }

    render() {
        return (
            <Import {...this.props} onSubmit={this.sendAddress}/>
        );
    };
};

let mapStateToProps = (state) => {
    return {
        importAddress: state.walletPage.importAddress,
    }
};

export default connect(
    mapStateToProps, 
    { generateButtonClicked, importWallet, importButtonClicked }
)(ImportContainer);