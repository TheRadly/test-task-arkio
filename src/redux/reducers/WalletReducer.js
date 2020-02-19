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
                walletAddress: state.walletAddress = '0x57849372777111aaa88827',
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

export const generateWallet = (phrasesArray, publicKey) => ({type: GENERATE_WALLET, phrasesArray, publicKey});
export const generateButtonClicked = (isGenerateButtonClicked) => ({type: GENERATE_BUTTON_CLICKED, isGenerateButtonClicked});
export const importButtonClicked = (isImportButtonClicked) => ({type: IMPORT_BUTTON_CLICKED, isImportButtonClicked});
export const importWallet = (address, publicKey) => ({type: IMPORT_WALLET, address, publicKey});
export const setImportAddress = (currentAddress) => ({type: SET_IMPORT_ADDRESS, currentAddress});

export default walletReducer;

