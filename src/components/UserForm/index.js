import React, {useState, useEffect} from 'react';

// import { Container } from './styles';
import {TextField, MenuItem} from '@material-ui/core';
import PhoneInput from '../PhoneInput';
import EmailInput from '../EmailInput';
import DateInput from '../DateInput';

const roles = [
  {
    value: 'Coach',
    label: 'Professor',
  },
  {
    value: 'Hostess',
    label: 'Recepcionista',
  },
  {
    value: 'Coachee',
    label: 'Aluno',
  }
];

const genders = [
  {
    value: 'M',
    label: 'Masculino',
  },
  {
    value: 'F',
    label: 'Feminino',
  },
  {
    value: 'None',
    label: 'Prefiro não informar.',
  }
]


export default function UserForm({onSubmit}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthDay] = useState(null);
    const [registerID, setRegisterID] = useState(null);
    const [role, setRole] = useState('Coachee');
    const [email, setEmail] = useState('');
    const [career, setCareer] = useState('');
    const [gender, setGender] = useState('M');



    async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({name, phone, email, birthday, career, role, gender, registerID});
       /* setName('');
        setBirthDay('');
        setRegisterID(null);
        setRole('');
        setCareer('');

        setPhone('');*/
    }

  return (
    <form onSubmit={handleSubmit}>
    <TextField id="standard-basic" value={name} onChange={(e) => setName(e.target.value)} label="Nome" type="text" style={{width: '100%'}} required/>
    <PhoneInput value={phone} onChangePhone={(text) => setPhone(text)} />
    <DateInput value={birthday} onChangeDate={(text) => setBirthDay(text)} />
    
    <TextField id="standard-basic" value={registerID} onChange={(e) => setRegisterID(e.target.value)}  label="Matricula" type="number" style={{width: '100%'}} />
    <EmailInput value={email} onChangeEmail={(text) => setEmail(text)} />
    
    <TextField id="standard-basic" value={career} onChange={(e) => setCareer(e.target.value)}  label="Profissão" style={{width: '100%'}} />
    <TextField
          id="role"
          select
          label="Tipo"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{width: '40%'}}
        >
          {roles.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    <TextField
          id="gender"
          select
          label="Sexo"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{width: '40%', marginLeft: 20}}

        >
          {genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>




    <button type="submit">Salvar</button>

   
  </form>
  );
}


/*
    <div className="input-block">
      <label htmlFor="name">Nome</label>
      <input 
      name="name" 
      id="name" 
      value={name}
      onChange={e => setName(e.target.value)}
      required/>
    </div>

    <div className="input-block">
      <label htmlFor="">Telefone</label>
      <input 
      name="phone" 
      id="phone" 
      value={phone}
      onChange={e => setPhone(e.target.value)}
      required/>
    </div>
*/