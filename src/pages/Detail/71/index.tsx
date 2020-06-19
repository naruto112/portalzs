//Ramo 71
import React, { useState } from "react";

import Dropzone from "../../../components/DropZone";

interface Item {
  tipo_doc: string;
  noteid: number;
}

const Ramo = ({ params }: { params: any }) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [documents, setDocumentos] = useState<Item[]>([]);

  params[0].map((item: Item) => {
    documents.push(item);
  });

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
                        <div>
                          {documents.length > 0
                            ? documents.map((item) => (
                                <div key={item.noteid} className="document">
                                  {/* <div key={item.noteid}>{item.tipo_doc}</div> */}
                                  <span>{item.tipo_doc}</span>
                                  <Dropzone onFileUploaded={setSelectedFile} />
                                </div>
                              ))
                            : "Nenhum documento"}
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
