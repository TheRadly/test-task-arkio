const GENERATE_WALLET_BUTTON = 'GENERATE-WALLET';
const SET_RANDOMLY_PHRASES = 'SET-RANDOMLY-PHRASES';

let initialState = {
    walletAddress: '',
    randomlyPhrases: [],
    publicKey: ''
};

const walletReducer = ((state = initialState, action) => {
    switch(action.type) {
        case GENERATE_WALLET_BUTTON:
            return {
                ...state,
                walletAddress: state.walletAddress.push('0x57849372777111aaa88827'),
                randomlyPhrases: [...action.randomlyPhrases],
                publicKey: state.publicKey = 'SASI_YA_RABOTAYU'
            }
        default:
            return state;
    }
});

export const generateWalletButtonAC = () => ({type: GENERATE_WALLET_BUTTON});

export default walletReducer;

