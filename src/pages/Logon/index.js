import React, { useState } from "react";

import api from '../../services/api'
import santanderLogo from '../../assets/santander-logo-2.png';
import loadingGif from '../../assets/login_loading.gif';

import './styles.css';

export default function Logon() {

  const [hiddenLogin, setHiddenLogin] = useState(true);
  const [hiddenAlert, setHiddenAlert] = useState(true);
  const [message, setMessage] = useState('');
  const [sinistro, setSinistro] = useState('2020-71-29434-0');

  async function LoginSinistro(){

      setHiddenLogin(false);
      if (!sinistro) {
          setHiddenLogin(true);
          setHiddenAlert(false);
          setMessage(' Digite o nº de sinistro');
          return false;
      }
    
      api.get(`login/sinistro/${sinistro}`)
        .then(response =>{

          const { status } = response.data;  
            
          if (!status) {
              setHiddenLogin(true);
              setHiddenAlert(false);
              setMessage(' Sinistro não localizado');
          }

          console.log(response.data);

          const { email, nome, ramo, record, status } = response.data;

          localStorage.setItem(email);
          localStorage.setItem(email);
          localStorage.setItem(ramo);
          localStorage.setItem(record);
        //   localStorage.setItem(status);

            
      })

  }


  return (
  <div>
      <div className="login-box">
            <div className="login-logo">
            <img src={santanderLogo} alt="Logo Santander" className="logo"/>
            </div>

        <div className="login-box-body">
            <p className="login-box-msg"></p>
            <div className="form-group has-feedback">
                <input value={sinistro} onChange={e => setSinistro(e.target.value)} type="text" className="form-control" placeholder="Digite o Nº Sinistro" maxLength="35" style={{ fontWeight: 'bold' }} />
            </div>

            <div className="row">
                <div className="col-xs-8">
                    <div className="checkbox icheck">
                        <label>
                        </label>
                    </div>
                </div>
            
                <div className="col-xs-4">
                <button onClick={LoginSinistro} className="btn btn-primary btn-block btn-flat" style={{ fontFamily: "Open Sans,sans-serif" }} >Confirmar</button>
            </div>
        </div>
        </div>
        <div className="alert alert-danger line_danger" role="alert" hidden={hiddenAlert}>
            <span className="glyphicon glyphicon-info-sign"></span><span>{message}</span>
        </div>
      </div>
      <div id="loading-login" className="loading" hidden={hiddenLogin}>
        <img src={loadingGif} alt="Loading" />
      </div>
  </div>
  );
}
