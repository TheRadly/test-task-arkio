import React from "react";
import GenerateCss from "./Generate.module.css";
import * as axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const Generate = () => {
  let generateRandomWords = () => {
    axios.get('https://random-word-api.herokuapp.com/word?key=STB98C4Z&number=5')
    .then(words => {
        const list = words.data.map((word, index) =>
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
                <button onClick={generateRandomWords}>Generate words</button>
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
