import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://random-word-api.herokuapp.com/'
});

let customGenerator = (stroke) => {
    // Hardcode API endpoint
    let d = new Date().getTime();
        
    if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now();
    }
    
    let uuid = stroke.replace(/[xy]/g, (c) => {
        var r = (d + Math.random() * 16 ) % 16 | 0;
        d = Math.floor(d/16);

        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
};

export const generateAPI = {
    getRandomWords(apiKey, countWords) {
        return instance.get(`word?key=${apiKey}&number=${countWords}`);
    },
    generatePublicKey() {
        return customGenerator('xxxxxxxxxxx-xxxxx-4xxx-yxxxx-xxxxxxxxxx');
    },
    generateWalletAddress() {
        return '0x' + customGenerator('xxxxxxxxxxxxxxxxxxxxxxxx').toUpperCase();
    },
};