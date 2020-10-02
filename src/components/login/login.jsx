import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h3 className="col-12 page-info-title">Iniciar sesión</h3>
            </div>
            <div className="login-box col-12 offset-xl-3 col-xl-6 offset-lg-2 col-lg-8">
                <div className="row">
                    <label htmlFor="username" className="col-lg-3 offset-lg-1  offset-1 col-12" >Usuario:</label>
                    <input type="text" id="username" className="col-lg-6 form-control offset-lg-0 offset-1 col-10" 
                        onChange={e => setUsername(e.target.value)} 
                        value={username}/>
                </div>
                <div className="row">
                    <label htmlFor="password" className="col-lg-3 offset-lg-1 offset-1 col-12">Contraseña:</label>
                    <input type="password" id="password" className="col-lg-6 form-control offset-lg-0 offset-1 col-10" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} />
                </div>
                <div className="row">
                    <button className="btn btn-light offset-2 col-8" onClick={e => login()}>Iniciar sesión</button>
            </div>
            <hr className="registry-separator" />
            <div className="row">
                <div className="col-lg-6 col-12 offset-lg-3 align-center">
                    <span>¿Eres nuevo cliente?</span>
                </div>
            </div>
            <div className="row">
                <Link to="/registry" className="offset-2 col-8">
                    <button className="btn btn-primary col-12" >Crear cuenta</button>
                </Link>
            </div>
        </div>
    </div >
    )
};

export default Login;