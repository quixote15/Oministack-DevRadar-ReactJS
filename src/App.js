import React, {useEffect, useState} from 'react';
import api from './services/api';
import './App.css';
import './global.css'
import './aside.css'
import './main.css'


import DevForm from './components/DevForm';
import UserItem from './components/UserItem';
import UserForm from './components/UserForm';
import Form from './components/Form';



function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      console.log(response)
      setUsers(response.data)

    }

    loadUsers()
    
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('users', data);

    setUsers([...users, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <UserForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {users.map(user => (
            <UserItem key={user._id} user={user} />
            )
          )}
        
        </ul>
      </main>
    </div>
  );
}

export default App;
