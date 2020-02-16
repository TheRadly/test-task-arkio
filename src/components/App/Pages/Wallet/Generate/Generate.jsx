import React from "react";
import GenerateCss from "./Generate.module.css";
import * as axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const generateWordsURL = 'https://random-word-api.herokuapp.com/word?key=V1JCCFU2&number=10';

const Generate = (props) => {
  let generateRandomWords = () => {
    axios.get(generateWordsURL)
    .then(words => {
        let list = words.data.map((word, index) => 
            <li key={index}>{word}</li>
        );

        return list;
    }).catch((error) => console.log(error));
  };

  return (
    <div className={GenerateCss.generateLevel}>
      <div className={GenerateCss.newWalletTextBox}>
        <h4> New wallet address: </h4>
        <h4 className={GenerateCss.newWalletTextAddress}>
          {"0x01CA56BB8734CA19abC72813"}
        </h4>
      </div>
      <div className={GenerateCss.randomPhBox}>
        <h5> Randomly phrases: </h5>
        <div className={GenerateCss.randWordsBox}>
            <ul>
                { generateRandomWords() }
            </ul>
        </div>
        <h5 className={"mt-3"}>
            Public key: {"0x1287698761258716Abc9a87cab9BdD25960871"}
        </h5>
      </div>
    </div>
  );
};

export default Generate;
