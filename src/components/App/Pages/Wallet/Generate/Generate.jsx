import React from 'react';
import GenerateCss from './Generate.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const words = [
    'exactly', 'apple', 'koala',
    'elephant', 'juice', 'car',
    'ship', 'monkey', 'beer'
];

const Generate = () => {
    let randomPhGenerator = () => {
        const list = words.map((word, index) =>
            <li id={index}>{word}</li>
        );

        return list;
    };

    return (
        <div className={GenerateCss.generateLevel}>
            <div className={GenerateCss.newWalletTextBox}>
                <h4>New wallet address: </h4>
                <h4 className={GenerateCss.newWalletTextAddress}>{'0x01CA56BB8734CA19abC72813'}</h4>
            </div>
            <div className={GenerateCss.randomPhBox}>
                <h5>Randomly phrases:</h5>
                <div className={GenerateCss.randWordsBox}>
                    <ul>
                        { randomPhGenerator() }
                    </ul>
                </div>
                <h5 className={'mt-3'}>Public key: {'0x1287698761258716Abc9a87cab9BdD25960871'}</h5>
            </div>
        </div>
    );
};

export default Generate;
