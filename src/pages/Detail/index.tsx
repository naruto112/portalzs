import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Footer from "../Footer";
import Ramo71 from "./71";
import Ramo89 from "./89";

import LogoUser from "../../assets/img/user2-.jpg";
import SantanderLogo from "../../assets/img/santander-logo-2.png";
import api from "../../services/api";

export default function Detail() {
  const history = useHistory();
  const status = localStorage.getItem("status");
  const [nomeSegurado, setNomeSegurado] = useState("");
  const [nomeSinistrado, setNomeSinistrado] = useState("");
  const [nomeNotificante, setNomeNotificante] = useState("");
  const [cpfSegurado, setCpfSegurado] = useState("");
  const [cpfSinistrado, setCpfSinistrado] = useState("");
  const [cpfNotificante, setCpfNotificante] = useState("");
  const [numSinistro, setNumSinistro] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [apolice, setApolice] = useState("");
  const [ramo, setRamo] = useState("");

  if (!status) history.push("/");

  //DropMenu status bar
  window.onclick = function (event: any) {
    if (!event.target.matches(".hidden-xs")) {
      let dropdowns = document.getElementsByClassName("dropmenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  useEffect(() => {
    const record = localStorage.getItem("record");
    SinistroDocumento(record);
  }, []);

  async function SinistroDocumento(props: any) {
    await api.get(`documento/${props}`, {}).then((response) => {
      const data = response.data;

      setNomeSegurado(data[0].nome_segurado);
      setNomeSinistrado(data[0].nome_sinistrado);
      setNomeNotificante(data[0].nome_notificante);
      setCpfSegurado(data[0].cpf_segurado);
      setCpfSinistrado(data[0].cpf_sinistrado);
      setCpfNotificante(data[0].cpf_notificante);
      setNumSinistro(data[0].num_sinistro);
      setEmail(data[0].email_notificante);
      setTelefone(data[0].telefone);
      setCobertura(data[0].cobertura_reclamada);
      setApolice(data[0].apolice);
      setRamo(data[0].ramo);
    });
  }

  function handleExit() {
    localStorage.clear();
    history.push("/");
  }

  function DropMenu(e: any) {
    e.preventDefault();
    document.getElementById("myDropdown")!.classList.toggle("show");
  }

  return (
    <div>
      <header className="top">
        <a href="#" onClick={DropMenu}>
          <img src={LogoUser} className="user-image" alt="User Image" />
          <span id="nome_cliente" className="hidden-xs">
            LUCAS GONCALVES DE ARAUJO ROBERTO
          </span>
        </a>
      </header>
      <div className="dropmenu" id="myDropdown">
        <div className="dropmenu-btn">
          <img src={LogoUser} className="image-drop" alt="Image DropMenu" />
          <span className="hidden-large">
            LUCAS GONCALVES DE ARAUJO ROBERTO
          </span>
        </div>
        <div className="pull-right btn-detail">
          <button onClick={handleExit} className="btn btn-default btn-flat">
            Sair
          </button>
        </div>
      </div>

      <h1>
        <span className="logo-lg">
          <img src={SantanderLogo} alt="Santander Logo" />
        </span>
      </h1>

      <h2 className="h2-size">Bem vindo ao Portal de Sinistros Santander.</h2>
      <h4 className="h4-size">O que a gente pode fazer por você hoje?</h4>

      {/*FORMULARIO DE DADOS DO CLIENTES*/}

      <div className="row-detail">
        <div className="form-group col-md-4">
          <label>Nome do Segurado</label>
          <input
            type="text"
            value={nomeSegurado}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Nome do Sinistrado</label>
          <input
            type="text"
            value={nomeSinistrado}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Nome do Notificante</label>
          <input
            type="text"
            value={nomeNotificante}
            className="form-control"
            readOnly={true}
          />
        </div>
      </div>

      <div className="row-detail">
        <div className="form-group col-md-3">
          <label>CPF Segurado</label>
          <input
            type="text"
            value={cpfSegurado}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>CPF Sinistrado</label>
          <input
            type="text"
            value={cpfSinistrado}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>CPF Notificante</label>
          <input
            type="text"
            value={cpfNotificante}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>Nº Sinistro</label>
          <input
            type="text"
            value={numSinistro}
            className="form-control"
            readOnly={true}
          />
        </div>
      </div>

      <div className="row-detail">
        <div className="form-group col-md-3">
          <label>
            E-mail <span style={{ color: "red", fontSize: 14 }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>
            Telefone Contato{" "}
            <span style={{ color: "red", fontSize: 14 }}>*</span>
          </label>
          <input
            type="text"
            value={telefone}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>Cobertura Reclamada</label>
          <input
            type="text"
            value={cobertura}
            className="form-control"
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label>Apolice</label>
          <input
            type="text"
            value={apolice}
            className="form-control"
            readOnly={true}
          />
        </div>
      </div>
      {/* Exibe o Menu de Acordo com o Ramo */}
      <div className="form-group col-md-12">
        {ramo === "71" ? <Ramo71 /> : ""}
        {ramo === "89" ? <Ramo89 /> : ""}
      </div>
      <Footer />
    </div>
  );
}
