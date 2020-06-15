//Ramo 71
import React from "react";

interface Ramo {
  params: String[];
}

const Ramo = ({ params }: { params: String[] }) => {
  console.log(params);

  return (
    <div>
      <ul className="nav nav-tabs menu-bar">
        <li className="active" id="bar-doc">
          <a>Solicitação de Documentos</a>
        </li>
      </ul>
      <br></br>
      <br></br>
      <div className="callout-bar documentos">
        <h4 className="h4-font-size">DOCUMENTOS SOLICITADO PELA SEGURADORA</h4>
      </div>
      <section id="document-menu" className="content resposive-content">
        <div className="row" id="row">
          <div className="col-md-12">
            <ul className="timeline">
              <li>
                <div className="timeline-item timeline-item-resposive time-line-responsive">
                  <div className="timeline-body" id="body-upload">
                    <ul id="doc-conteudo" className="doc-conteudo">
                      <div id="alert-tipifica"></div>
                      <div id="alert-tipifica-not">
                        <div style={{ textAlign: "center" }}>
                          Nenhum documento
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ramo;
