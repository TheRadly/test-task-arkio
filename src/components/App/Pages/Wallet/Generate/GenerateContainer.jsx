import React from 'react';
import Generate from './Generate';
import { connect } from 'react-redux';
import { generateWallet } from '../../../../../redux/reducers/walletReducer';
import * as axios from "axios";

const generateWordsURL = 'https://random-word-api.herokuapp.com/word?key=MHLC5KDH&number=5';

class GenerateContainer extends React.Component {
    componentDidMount() {
        let generatePublicKey = () => {
            let d = new Date().getTime();
            
            if (window.performance && typeof window.performance.now === 'function') {
                d += performance.now();
            }
            
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);

                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });

            return uuid;
        }
        
        axios.get(generateWordsURL)
        .then(words => {
            this.props.generateWallet(words, generatePublicKey());
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