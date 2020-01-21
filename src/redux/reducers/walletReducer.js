const IMPORT_WALLET_ACTION = 'IMPORT_WALLET';
const GENERATE_WALLET_ACTION = 'GENERATE_WALLET';

let initialState = {
    importData: {
        importInput: '',
    },
    generateData: {
        addressWallet: '0x000000000000000001',
        randomPhrases: [
            'exactly', 'apple', 'koala',
            'elephant', 'juice', 'car',
            'ship', 'monkey', 'beer'
        ],
        publicKey: '0x1287698761258716Abc9a87cab9BdD25960871'
    },
};

let walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMPORT_WALLET_ACTION:
            let importAddress = '0x000000000000000002';
            let importRandPhrases = [
                'airplane', 'pineapple', 'dog',
                'dolphin', 'bike', 'browser',
                'notebook', 'peace', 'bottle'
            ];
            let importPublicKey = '0x87a56C2718239A2841ca21s84732CDa18s777';

            state.generateData.addressWallet = importAddress;
            state.generateData.randomPhrases = importRandPhrases;
            state.generateData.publicKey = importPublicKey;

            return state;
        case GENERATE_WALLET_ACTION:
            let generateAddress = '0x7777777777777777777';
            let generateRandPhrases = [
                'food', 'test', 'web',
                'sponge', 'bike', 'button',
                'pc', 'guitar', 'music'
            ];
            let generatePublicKey = '0x987a6dc87ad6c9a87dc6ad87c6da6666212A';

            state.generateData.addressWallet = generateAddress;
            state.generateData.randomPhrases = generateRandPhrases;
            state.generateData.publicKey = generatePublicKey;

            return state;
    }
};

export default walletReducer;
