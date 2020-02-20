import React from 'react';
import Generate from './Generate';
import { connect } from 'react-redux';
import { generateWallet } from '../../../../../redux/reducers/walletReducer';
import { generateAPI } from '../../../../../api/api';
import * as axios from "axios";

const generateWordsURL = 'https://random-word-api.herokuapp.com/word?key=MHLC5KDH&number=5';

class GenerateContainer extends React.Component {
    componentDidMount() {
        generateAPI.getRandomWords('UMV39GQA', 5).then((words) => {
            this.props.generateWallet(words, generateAPI.generatePublicKey(), generateAPI.generateWalletAddress());
        }).catch((error) => console.log(error));
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