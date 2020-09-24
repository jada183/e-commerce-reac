import React , { useState } from 'react';
import Main from './components/main/main';
import Header from './components/header/header';
import './app.css';
import profileImg from './assets/icons/usuario.svg';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import { Link } from "react-router-dom";
function App() {
  const [sidebarClass, setSideBarClass] = useState('active');
  
  return (
    <div className="wrapper">
      <nav id="sidebar" className={sidebarClass}>
        <Link to="/login">
          <nav
            className="navbar navbar-expand-lg navbar-light sidebar-header userInfo"
            aria-label="menu-header"
          >

            {/* 
                  <span v-if="login">
                    <img src="~assets/icons/usuario.svg" alt="icono de usuario" width="25px" height="25px" />
                    Hola {{ userName }}
                  </span> 
              */}
          
            <span className="link">
              <img src={profileImg} alt="icono de usuario" width="30px" height="30px" />
              Hola, Identifícate.
            </span>
          
          </nav>
         </Link>
        <div className="menu-container">
          < Menu/>
        </div>
      </nav>
      <div id="content">
        <Header toggleSidebar={ (e) => {
          setSideBarClass(sidebarClass === '' ? 'active' : '');
          }} />
        <Main />
        < Footer/>
      </div>
    </div>
  );
}

export default App;
