import React, {useEffect, useState} from 'react';
import ImgReport from '../../../Images/Recap/monitor.png';
import './gest_riepilogo.css';
import './terminal.css';
import {useConrepo} from "../../../Hooks";

const GestRiepilogo = () => {
    const {dataChannel, dataAcquisition} = useConrepo();
    const [lMsg, setLMsg] = useState("Testo");
    const [lMsgChannels, setLMsgChannels] = useState("Testo");
    const [errorAcq, setErrorAcq] = useState("div_recap_text_recap");

    useEffect(()=>{
        selectInfos();
        selectDatas();
    }, [dataChannel, dataAcquisition])

    const selectInfos = () => {
        setErrorAcq("div_recap_text_recap");
        var AI = parseInt(dataAcquisition.data[0].Value);
        var AD = parseInt(dataAcquisition.data[1].Value);
        var msg ="Con questa configurazione i dati verranno salvati contiamente alla velocità massima di acquisizione fino al termine della prova";
        // Acquisizione continua
        if(AI === 0 && AD === 0)
            msg = "Con entrambi i parametri ipostati a 0 verrà creato un LOG alla massima frequenza disponibile.";

        //Una acquisizione ogni intervallo
        if(AI !== 0 && AD === 0 )
            msg = "Con questi parametri verrà creato un LOG contenente un dato ogni " + AI + " secondi.";

        //Acquisizione per una durata ogni intervallo
        if(AI !== 0 && AD !== 0 ){
            if (AD <= AI) {
                msg = "Con questi parametri verrà creato un LOG contenente dati alla massima frequenza disponibile per la durata di " + AD + " secondi ogni " + AI + " secondi.";
            }else{
                setErrorAcq("div_recap_text_recap_alertAcq");
                msg = "Attenzione! con questi parametri non sarà possibile creare il LOG, la durata deve essere inferiore dell'intervallo.";
            }
        }
        setLMsg(msg);
    }

    const selectDatas = () =>{
        var msg = "022-05-10 19:40:15.969 ";
        dataChannel.data.map(el=>{
            if(el.Value === true)
                msg += el.Name + ":" + Math.floor(Math.random() * (1000 - 100) + 100) / 100 +", ";
            return msg;
        });
        setLMsgChannels(msg);
    }


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

                            {lMsgChannels}


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
                <div className={errorAcq}>
                    <label>{lMsg}</label>

                </div>
            </div>
        </div>
    );
};

export default GestRiepilogo;