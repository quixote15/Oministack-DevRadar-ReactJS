import React from 'react';

import {TextField, MenuItem} from '@material-ui/core';

// import { Container } from './styles';

export default function PhoneInput({value, onChangePhone}) {

    function formatPhone(phone) {
        const  result = phone.replace(/(\d{2})(\d{5})(\d{4})/,
        function( regex, arg1, arg2, arg3) {
            return `(${arg1}) ${arg2}-${arg3}`;
        });
       
        console.log(result)
        onChangePhone(result)
    }
  return (
    <TextField id="phone" value={value} onChange={(e) => formatPhone(e.target.value)}  label="Telefone" type="text" style={{width: '100%'}} required />
  );
}
