import React , { useState } from 'react';
import Main from './components/main/main';
import Header from './components/header/header';
import './app.css';
import profileImg from './assets/icons/usuario.svg';

function App() {
  const [sidebarClass, setSideBarClass] = useState('active');
  
  return (
    <div className="wrapper">
      <nav id="sidebar" className={sidebarClass}>
        <nav
          className="navbar navbar-expand-lg navbar-light sidebar-header userInfo"
          aria-label="menu-header"
        >
          {/* <span v-if="login">
            <img src="~assets/icons/usuario.svg" alt="icono de usuario" width="25px" height="25px" />
            Hola {{ userName }}
          </span> */}
          <span className="link">
            <img src={profileImg} alt="icono de usuario" width="25px" height="25px" />
            Hola, Identifícate.
          </span>
        </nav>
        <div className="menu-container">
          <ol>
            <li>menu</li>
          </ol>
        </div>
      </nav>
      <div id="content">
        <Header toggleSidebar={ (e) => {
          setSideBarClass(sidebarClass === '' ? 'active' : '');
          }} />
        <Main />
      </div>
    </div>
  );
}

export default App;
