const GENERATE_WALLET = 'GENERATE-WALLET';
const GENERATE_BUTTON_CLICKED = 'GENERATE-BUTTON-CLICKED';

let initialState = {
    isGenerateButton: false,
    walletAddress: '',
    randomlyPhrases: [],
    publicKey: ''
};

const walletReducer = ((state = initialState, action) => {
    switch(action.type) {
        case GENERATE_WALLET:
            return {
                ...state,
                walletAddress: state.walletAddress = '0x57849372777111aaa88827',
                randomlyPhrases: action.phrasesArray,
                publicKey: state.publicKey = 'SASI_YA_RABOTAYU'
            }
        case GENERATE_BUTTON_CLICKED: {
            return {
                ...state,
                isGenerateButton: action.isClicked
            }
        }
        default:
            return state;
    }
});

export const generateWallet = (phrasesArray = []) => ({type: GENERATE_WALLET, phrasesArray});
export const generateButtonClicked = (isClicked) => ({type: GENERATE_BUTTON_CLICKED, isClicked});

export default walletReducer;

