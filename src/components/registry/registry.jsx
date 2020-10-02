import React, { useState, useEffect } from "react";
import './registry.css'
const Registry = () => {
    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeteadPassword] = useState('');
    const createAcount = () => {
        console.log('CREATE ACCOUNT');
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h3 className="col-lg-4  col-12 page-info-title">Crear cuenta</h3>
            </div>
            <div className="registry-form-container col-12 offset-lg-3 col-lg-6 ">
                <div className="row">
                    <h5 className="offset-lg-2  col-10 offset-1">Datos generales</h5>
                </div>
                <div className="row">
                    <input
                        type="text"
                        placeholder="* Nombre de usuario"
                        id="name"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        onChange={e => setUsername(e.target.value)} 
                        value={username}
                    />
                </div>
                <div className="row">
                    <input
                        type="text"
                        placeholder="* Nombre"
                        id="name"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        onChange={e => setname(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="row">
                    <input
                        type="email"
                        placeholder="* Email"
                        id="email"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="row">
                    <input
                        type="text"
                        placeholder="Teléfono"
                        id="phone"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <div className="row">
                    <h5 className="offset-lg-2  offset-1">Contraseña</h5>
                </div>
                <div className="row">
                    <input
                        type="password"
                        placeholder="* Contraseña"
                        id="password"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    <input
                        type="password"
                        placeholder="* Repetir Contraseña"
                        id="repeatPassword"
                        className="col-lg-8 offset-lg-2 col-10 offset-1 form-control"
                        value={repeatedPassword}
                        onChange={e => setRepeteadPassword(e.target.value)}
                    />
                </div>
                <div className="row">
                    <button className="btn btn-primary col-lg-8 offset-lg-2 col-10 offset-1" onClick={e => createAcount()}>Crear cuenta</button>
            </div>
        </div>
    </div >
    )
}
export default Registry;