import React from 'react';
import ImportCss from './Import.module.css';

const Import = (props) => {
    return (
        <div className={ImportCss.importLevel}>
            <span>Wallet address / public key: </span>
            <input className={ImportCss.importInput} type="text"/>
            <a href={'generate'} className={props.buttonStyle}>
                Import
            </a>
        </div>
    );
};

export default Import;
