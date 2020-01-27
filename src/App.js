import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css'
import './aside.css'
import './main.css'



function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude)
      },
      error => {
        console.log(error)
      },
      {
        timeout: 30000
      }
    );
    
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            value={github_username}
            onChange={e => setGithubUserName(e.target.value)}
            required/>
          </div>

          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input 
              name="latitude" 
              id="latitude" 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              required/>
            </div>

            <div className="input-block">
              <label htmlFor="">Longitude</label>
              <input 
              name="longitude" 
              id="longitude" 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
              required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

         
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12732779?s=400&v=4" alt="Dev Avatar"/>
              <div className="user-info">
                <strong>Thiago Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na Fechô. Apaixonado pelas melhores Tecnologias do mercado JS.</p>
            <a href="https://github.com/quixote15">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12732779?s=400&v=4" alt="Dev Avatar"/>
              <div className="user-info">
                <strong>Thiago Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na Fechô. Apaixonado pelas melhores Tecnologias do mercado JS.</p>
            <a href="https://github.com/quixote15">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12732779?s=400&v=4" alt="Dev Avatar"/>
              <div className="user-info">
                <strong>Thiago Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na Fechô. Apaixonado pelas melhores Tecnologias do mercado JS.</p>
            <a href="https://github.com/quixote15">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12732779?s=400&v=4" alt="Dev Avatar"/>
              <div className="user-info">
                <strong>Thiago Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na Fechô. Apaixonado pelas melhores Tecnologias do mercado JS.</p>
            <a href="https://github.com/quixote15">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
