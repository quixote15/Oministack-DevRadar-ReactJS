import React, {useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import {TextField, MenuItem} from '@material-ui/core';
import InputMask from "react-input-mask";
const MyFormWithFormik = withFormik({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
    address: {
      /* outros campos */ 
      city: { 
        name: '',
        /* outros campos */
      }
    }
  }),
  handleSubmit: values => {
    /**
     * o values seria todos os valores do mapeados no  mapValuesToProps,
     * o segundo parametro são os métodos do formik, muito úteis
     * Antes de rodar o handleSubmit, o formik já roda o método de
     * validação dos dados, que posso escrever um novo artigo sobre
    **/
   console.log(values)
   // api.post(values)
  }
});


const FormUser = () => {
    const [phone, setPhone] = useState('');
    function formatPhone(value) {
        var x = value.replace(/\D/g, '').match();
        const result = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        console.log(result)
        setPhone(result)
    }
  
  return (<Form> 
    <Field  type="text" name="phone" component={({ field, form, ...props }) => {
    return  <InputMask  mask="(99) 99999-9999"  {...field} {...props} id="tel" label="tel" style={{width: '100%'}} />;
    }
} />
    
    <Field type="password" name="password" />
    <Field name="address.city.name" />
    <button type="submit" >
      Submit
    </button>
  </Form>);
};

export default MyFormWithFormik(FormUser)