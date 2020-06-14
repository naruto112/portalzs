import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <div className="recommendation">
          Esta seguradora se reserva no direito de solicitar novos documentos
          caso se tornem necessários durante a regulação do sinistro. O prazo
          máximo para pagamento da indenização será de até 30 (trinta) dias,
          contados da data em que a Seguradora receber TODOS os documentos
          necessários para a comprovação do evento coberto, de acordo com a
          relação constante das condições especiais de cada cobertura contratada
          em Documentos para Sinistro.
        </div>
      </div>
      <br></br>
      <div>
        <div className="recommendation">
          Em casos de dúvida e/ou posicionamento do sinistro, entre em contato
          nos telefones <b>0800 940 2901</b> ou <b>3132-7782</b>, de
          segunda-feira a sexta-feira, das 8h às 18h.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
