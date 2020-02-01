import React, {useState} from 'react';

import {TextField, MenuItem} from '@material-ui/core';

// import { Container } from './styles';

export default function DateInput({value, onChangeDate}) {

    const [error, setError] = useState(null)

    function formatDate(phone) {
        const  result = phone.replace(/(\d{2})(\d{2})(\d{4})/,
        function( regex, arg1, arg2, arg3) {
            return `${arg1}/${arg2}/${arg3}`;
        });
       
        console.log(result)
        onChangeDate(result)
    }
  return (
    <TextField id="birthday" error={error}  value={value} onChange={(e) => formatDate(e.target.value)}  label="Data de Nascimento" type="text" style={{width: '100%'}} required />
  );
}
