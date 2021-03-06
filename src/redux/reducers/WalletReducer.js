import { generateAPI } from '../../api/api';

const GENERATE_WALLET = 'GENERATE-WALLET';
const GENERATE_BUTTON_CLICKED = 'GENERATE-BUTTON-CLICKED';
const IMPORT_WALLET = 'IMPORT-WALLET';
const IMPORT_BUTTON_CLICKED = 'IMPORT-BUTTON-CLICKED';
const SET_IMPORT_ADDRESS = 'SET-IMPORT-ADDRESS';

let initialState = {
    isGenerateButton: false,
    isImportButton: false,
    walletAddress: '',
    randomlyPhrases: [],
    publicKey: '',
    importAddress: ''
};

const walletReducer = ((state = initialState, action) => {
    switch(action.type) {
        case GENERATE_WALLET:
            return {
                ...state,
                walletAddress: action.walletAddress,
                randomlyPhrases: action.phrasesArray,
                publicKey: action.publicKey
            }
        case GENERATE_BUTTON_CLICKED: {
            return {
                ...state,
                isGenerateButton: action.isGenerateButtonClicked
            }
        }
        case IMPORT_WALLET: {
            return {
                ...state,
                walletAddress: action.address,
                publicKey: action.publicKey
            }
        }
        case SET_IMPORT_ADDRESS: {
            return {
                ...state,
                importAddress: action.currentAddress
            }
        }
        case IMPORT_BUTTON_CLICKED: {
            return {
                ...state,
                isImportButton: action.isImportButtonClicked
            }
        }
        default:
            return state;
    }
});

export const generateWalletAccess = (phrasesArray, publicKey, walletAddress) => ({type: GENERATE_WALLET, phrasesArray, publicKey, walletAddress});
export const generateButtonClicked = (isGenerateButtonClicked) => ({type: GENERATE_BUTTON_CLICKED, isGenerateButtonClicked});
export const importButtonClicked = (isImportButtonClicked) => ({type: IMPORT_BUTTON_CLICKED, isImportButtonClicked});
export const importWallet = (address, publicKey) => ({type: IMPORT_WALLET, address, publicKey});
export const setImportAddress = (currentAddress) => ({type: SET_IMPORT_ADDRESS, currentAddress});

export const generateWallet = (apiKey, countWords) => {
    return (dispatch) => {
        generateAPI.getRandomWords(apiKey, countWords).then((words) => {
            dispatch(generateWalletAccess(words, generateAPI.generatePublicKey(), generateAPI.generateWalletAddress()));
        }).catch((error) => console.log(error));
    };
};

export default walletReducer;

