import React from 'react';
import Generate from './Generate';
import { connect } from 'react-redux';
import { generateWallet } from '../../../../../redux/reducers/walletReducer';
import * as axios from "axios";

const generateWordsURL = 'https://random-word-api.herokuapp.com/word?key=MQRNWJJW&number=10';

class GenerateContainer extends React.Component {
    componentDidMount() {
        axios.get(generateWordsURL)
        .then(words => {
            this.props.generateWallet(words);
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