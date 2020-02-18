import React from "react";
import GenerateCss from "./Generate.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Generate = (props) => {
  let generateRandomWords = () => {
      let list = props.randomlyPhrases.data.map((word, index) => (
        <li key={index}>{word}</li>
      ));

      return list;
  };

  return (
    <div className={GenerateCss.generateLevel}>
      <div className={GenerateCss.newWalletTextBox}>
        <h4> New wallet address: </h4>
        <h4 className={GenerateCss.newWalletTextAddress}>
          { props.walletAddress }
        </h4>
      </div>
      <div className={GenerateCss.randomPhBox}>
        <h5> Randomly phrases: </h5>
        <div className={GenerateCss.randWordsBox}>
          <ul>{ generateRandomWords() }</ul>
        </div>
        <h5 className={"mt-3"}>
          Public key: { props.publicKey }
        </h5>
      </div>
    </div>
  );
};

export default Generate;
