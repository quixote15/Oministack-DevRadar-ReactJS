import React, {useState} from 'react';

import {TextField, MenuItem} from '@material-ui/core';

// import { Container } from './styles';

export default function EmailInput({value, onChangeEmail}) {

    const [error, setError] = useState(null)

    function isEmailValid(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = regex.test(String(email).toLowerCase());

        console.log(isValid);
        setError(!isValid);
        onChangeEmail(email);
    }
  return (
    <TextField id="email" error={error}  value={value} onChange={(e) => isEmailValid(e.target.value)}  label="Email" type="text" style={{width: '100%'}} required />
  );
}
