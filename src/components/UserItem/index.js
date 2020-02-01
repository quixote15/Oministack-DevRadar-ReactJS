import React from 'react';
import './styles.css';

export default function UserItem({user}) {
  return (
    <li className="dev-item">
        <header>
        <img src={user.avatar_url} alt="User Avatar"/>
            <div className="dev-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
            </div>
        </header>
        <p>{user.role}</p>
  
    </li>
  );
}
