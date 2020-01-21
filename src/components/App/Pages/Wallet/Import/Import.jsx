import React from 'react';
import ImportCss from './Import.module.css';

const Import = (props) => {
    let importInput = props.state.importData.importInput;

    let onClickImportButton = {

    };

    let onNewInputChange = (e) => {
        let inputBody = e.target.value;
        importInput = inputBody;
    };

    return (
        <div className={ImportCss.importLevel}>
            <span>Wallet address / public key: </span>
            <input onChange={onNewInputChange} value={importInput} placeholder={' Write you\'re address/public key here...'} className={ImportCss.importInput} type="text"/>
            <a href={'generate'} className={props.buttonStyle}>
                Import
            </a>
        </div>
    );
};

export default Import;
