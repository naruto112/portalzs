import React from "react";

const Ramo = () => {
  return (
    <div>
      <ul className="nav nav-tabs menu-bar">
        <li id="bar-status">
          <a href="javascript:TabMenu('status')">Status do Sinistro</a>
        </li>
        <li className="active" id="bar-doc">
          <a href="#">Solicitação de Documentos</a>
        </li>
      </ul>
      <div className="callout-bar documentos">
        <h4 className="h4-font-size">DOCUMENTOS SOLICITADO PELA SEGURADORA</h4>
      </div>
    </div>
  );
};

export default Ramo;
