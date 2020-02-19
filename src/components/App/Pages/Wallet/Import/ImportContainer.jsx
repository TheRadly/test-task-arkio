import React from 'react';
import { connect } from 'react-redux';
import { importWallet } from '../../../../../redux/reducers/walletReducer';
import Import from './Import';

class ImportContainer extends React.Component {
    render() {
        return (
            <Import {...this.props}/>
        );
    };
};

let mapStateToProps = (state) => {
    return {
        importAddress: state.walletPage.importAddress,
    }
};

export default connect(mapStateToProps, { importWallet })(ImportContainer);