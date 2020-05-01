import React, { useState } from "react";
import { useHistory, Route } from 'react-router-dom'

import LogoUser from '../../assets/user2-.jpg';
import './styles.css';




export default function Detail() {


    


    return(
        <div>
            <header className="top">
                <a href="#">
                    <img src={LogoUser} className="user-image" alt="User Image"/>
                    <span id="nome_cliente" className="hidden-xs">LUCAS GONCALVES DE ARAUJO</span>
                </a>
            </header>
            <div className="dropmenu">
                <div className="dropmenu-btn">
                    <img src={LogoUser} className="user-image-drop" alt="User Image"/>
                    <span className="hidden-large" >LUCAS GONCALVES DE ARAUJO</span>
                </div>
                <div className="pull-right">
                    <button  className="btn btn-default btn-flat">Sair</button>
                </div>
            </div>
        </div>
    );
}