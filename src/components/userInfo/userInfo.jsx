import React, { useState, useEffect } from 'react';
import './userInfo.css';
const UserInfo = () => {
    const [name, setName] = useState('');
    const [disabledName, setDisabledName] = useState(true);
    const [email, setEmail] = useState('');
    const [disabledEmail, setDisabledEmail] = useState(true);
    const [phone, setPhone] = useState('');
    const [disabledPhone, setDisabledPhone] = useState(true);
    const [password, setPassword] = useState('');
    const [changePassword, setChangePassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [repeatedNewPassword, setRepeatedNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const changePasswordEvent = () => {
        if (newPassword.length < 6) {
            setPasswordError('No se puede guardar contraseñas con menos de 6 carácteres');
        } else if (newPassword === repeatedNewPassword) {
            setChangePassword(false);
            setPasswordError('');
            setPassword(newPassword);
            cleanChangePasswordField();
        } else {
            setPasswordError('Las contraseñas no coinciden');
        }
    };
    const cancelChangePassword = () => {
        cleanChangePasswordField();
        setPasswordError('');
        setChangePassword(false);
    };
    const cleanChangePasswordField = () => {
        setNewPassword('');
        setRepeatedNewPassword('');
    };
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h3 className="col-12 page-info-title">Datos de usuario</h3>
            </div>
            <div className="user-info-form-container col-12  offset-lg-2 col-lg-8 ">
                <div className="row">
                    <label htmlFor="name" className="col-lg-2 offset-lg-1  col-12 offset-0">Nombre:</label>
                    <input
                        type="text"
                        placeholder="nombre..."
                        id="name"
                        className="col-lg-5 col-8 form-control"
                        value={name}
                        disabled={disabledName}
                        onChange={e => setName(e.target.value)}
                  />
                  {(
                      () => {
                          if (disabledName) {
                              return <button
                                    className="btn btn-light offset-lg-1 col-lg-2 col-4"
                                    onClick={e => setDisabledName(false)}
                                    >Editar
                                    </button>
                          } else {
                              return <button
                                  className="btn btn-light offset-lg-1 col-lg-2 col-4"
                                  onClick={e => setDisabledName(true)}
                                 >Guardar</button>
                          }
                      }
                  )()}
                
        </div>
        <div className="row">
            <label htmlFor="email" className="col-lg-2 offset-lg-1 col-12 offset-0">Email:</label>
            <input
                type="text"
                placeholder="Email..."
                id="email"
                className="col-lg-5 col-8 form-control"
                value={email}
                disabled={disabledEmail}
                onChange={e => setEmail(e.target.value)}
          />
          {(
              () => {
                  if (disabledEmail) {
                        return <button
                            className="btn btn-light offset-lg-1 col-lg-2 col-4"
                            onClick={e => setDisabledEmail(false)}
                    >Editar</button>
                  } else {
                        return <button
                        className="btn btn-light offset-lg-1 col-lg-2 col-4"
                            onClick={e => setDisabledEmail(true)}
                        >Guardar</button>
                  }
              }
          )()}
      </div >
    <div className="row">
        <label htmlFor="phone" className="col-lg-2 offset-lg-1 col-12 offset-0">Teléfono:</label>
        <input
            type="text"
            placeholder="Teléfono..."
            id="phone"
            className="col-lg-5 col-8 form-control"
            value={phone}
            disabled={disabledPhone}
            onChange={e => setPhone(e.target.value)}
      />
        {(
            () => {
                if (disabledPhone) {
                    return <button
                            className="btn btn-light offset-lg-1 col-lg-2 col-4"
                            onClick={e => setDisabledPhone(false)}
                            >Editar</button>
                } else {
                    return <button
                        className="btn btn-light offset-lg-1 col-lg-2 col-4"
                        onClick={e => setDisabledPhone(true)}
                        >Guardar</button>
                }
            }
        )()}
      </div >
    {(
        () => {
            if (changePassword) {
                return (<div>
                    <div className="row">
                        <label htmlFor="newPassword" className="col-lg-2 offset-lg-1 col-12 offset-0">Nueva contraseña:</label>
                        <input
                            type="password"
                            placeholder="contraseña...."
                            id="newPassword"
                            className="col-lg-5 col-8 form-control"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                        <button className="btn btn-light offset-lg-1 col-lg-2 col-4" onClick={e => cancelChangePassword()} tabIndex="-1">Cancelar</button>
                    </div >
                    <div className="row">
                        <label htmlFor="repeatedNewPassword" className="col-lg-2 offset-lg-1 col-12 offset-0">Repita contraseña:</label>
                        <input
                            type="password"
                            placeholder="contraseña...."
                            id="repeatedNewPassword"
                            className="col-lg-5 col-8 form-control"
                            onChange={e => setRepeatedNewPassword(e.target.value)}
                            value={repeatedNewPassword}
                        />
                        <button className="btn btn-light offset-lg-1 col-lg-2 col-4" onClick={e => changePasswordEvent()}>Guardar</button>
                    </div >
                </div>);
               
            } else  {
                    return (<div className="row">
                            <label htmlFor="password" className="col-lg-2 offset-lg-1 col-12 offset-0">Contraseña:</label>
                            <input
                                type="password"
                                placeholder="contraseña...."
                                id="password"
                                className="col-lg-5 col-8 form-control"
                                value={password}
                                disabled={true}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button
                                className="btn btn-light offset-lg-1 col-lg-2 col-4"
                                onClick={e => setChangePassword(true)}
                            >Editar</button>
                        </div >);
                }
            }
        )()}
        {(
            () => {
                if (passwordError) {
                    return <div className="row" v-if="passwordError">
                        <span className="error-text offset-md-1 col-md-11">- {passwordError}</span>
                    </div>
                }
            }
        )()}                
    </div >
  </div >
    )
}
export default UserInfo