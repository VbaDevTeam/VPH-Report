import React from 'react';
import ImgReport from '../../../Images/Recap/monitor.png';
import './gest_riepilogo.css';
import './terminal.css';
const GestRiepilogo = () => {
    return (
        <div className={'div_container_recap'}>
            <div className={'div_infos_recap'}>
                <div id="my_main_terminal">
                    <div id="terminal">
                        <section id="terminal__bar">
                            <div id="bar__buttons">
                                <button className="bar__button" id="bar__button--exit">&#10005;</button>
                                <button className="bar__button">&#9472;</button>
                                <button className="bar__button">&#9723;</button>
                            </div>
                            <p id="bar__user">storm@vbaDev: ~</p>
                        </section>

                        <section id="terminal__body">

                            2022-05-10 19:40:15.969 "SP_PR":0,"PV_Pressione_Monte":-0.05,"PV_Pressione_Valle":-0.05,"cntCicStep":38809,"cntTmStep":2757
                            2022-05-10 19:40:16.050 "SP_Pressione_Fluido":0,"PV_Pressione_Monte":-0.05,"PV_Pressione_Valle":-0.05,"cntCicStep":38809,"cntTmStep":2757

                            <div id="terminal__prompt">
                                <span id="terminal__prompt--user">report@vbaDev:</span>
                                <span id="terminal__prompt--location">~</span>
                                <span id="terminal__prompt--bling">$</span>
                                <span id="terminal__prompt--cursor"></span>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={'div_image_recap'}>
                    <img src={ImgReport} alt="Immagine"></img>
                </div>
            </div>
            <div className={'div_recap_recap'}>
                <div className={'div_recap_text_recap'}>
                    Con questa configurazione i dati verranno salvati contiamente alla velocità massima di acquisizione fino al termine della prova
                </div>
            </div>
        </div>
    );
};

export default GestRiepilogo;