import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css'
import './aside.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <labal htmlFor="github_username">Usuário do Github</labal>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <labal htmlFor="">Tecnologias</labal>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <labal htmlFor="">Latitude</labal>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <labal htmlFor="">Longitude</labal>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

         
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
