import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import santanderLogo from "../../assets/img/santander-logo-2.png";
import loadingGif from "../../assets/img/login_loading.gif";





export default function Confirm() {
  const history = useHistory();
  const [hiddenLogin, setHiddenLogin] = useState(true);
  const [hiddenAlert, setHiddenAlert] = useState(true);
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("desenvolvimento@techmail.com.br");
  const email = localStorage.getItem("email")!;
  const record = localStorage.getItem("record")!;

  async function validarMail(e:any) {
    e.preventDefault();
    const data = new FormData();
    data.append("email", mail);
    data.append("record", record);

    await api.post("validar/email", data, {}).then((response) => {
      const { status } = response.data;

      if (!status) {
        setHiddenLogin(true);
        setHiddenAlert(false);
        setMessage(" E-mail incorreto");
        return false;
      }

      history.push("/portal");
    });
  }

  return (
    <div>
      <div className="login-box">
        <div className="login-logo">
          <img src={santanderLogo} alt="Logo Santander" className="logo" />
        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Complete o e-mail visualizado abaixo:</p>
          <p className="login-box-msg">
            <b>{email}</b>
          </p>
          <div className="form-group has-feedback">
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              className="form-control"
              style={{ fontWeight: "bold" }}
            />
          </div>

          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label></label>
              </div>
            </div>

            <div className="col-xs-4">
              <button
                onClick={validarMail}
                className="btn btn-primary btn-block btn-flat"
                style={{ fontFamily: "Open Sans,sans-serif" }}
              >
                Validar
              </button>
            </div>
          </div>
        </div>
        <div
          className="alert alert-danger line_danger"
          role="alert"
          hidden={hiddenAlert}
        >
          <span className="glyphicon glyphicon-info-sign"></span>
          <span>{message}</span>
        </div>
      </div>
      <div id="loading-login" className="loading" hidden={hiddenLogin}>
        <img src={loadingGif} alt="Loading" />
      </div>
    </div>
  );
}
