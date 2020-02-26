import React from 'react';
import ImportCss from './Import.module.css';
import { Field, reduxForm } from 'redux-form'

const Import = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={ImportCss.importLevel}>
            <span>Wallet address / public key: </span>
            <Field  placeholder={'Write you\'re address/public key here...'}
                    className={ImportCss.importInput} 
                    name='address'
                    component='textarea'
            />
            <button onClick={() => {
                        props.generateButtonClicked(true);
                        props.importButtonClicked(false);
                    }} className={props.buttonStyle}>
                Import
            </button>
        </form>
    );
};

export default reduxForm({form: 'importAddressForm'})(Import);
