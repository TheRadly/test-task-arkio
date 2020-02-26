import React from 'react';
import Generate from './Generate';
import { connect } from 'react-redux';
import { generateWallet } from '../../../../../redux/reducers/walletReducer';

class GenerateContainer extends React.Component {
    componentDidMount() {
        this.props.generateWallet('O62YOTEI', 5);
    };

    render() {
        return (
            <Generate {...this.props}/>
        );
    };
};

let mapStateToProps = (state) => {
    return {
        walletAddress: state.walletPage.walletAddress,
        randomlyPhrases: state.walletPage.randomlyPhrases,
        publicKey: state.walletPage.publicKey
    }
};

export default connect(mapStateToProps, { generateWallet })(GenerateContainer);