import React, {useEffect, useState} from 'react';
import TotalParameters from "../componenti/conf_save/configurazione_report/total_parameters";
import GestRiepilogo from "../componenti/conf_save/riepilogo/gest_riepilogo";
import './gestReport.css';
// import {useState} from "@types/react";

const PaginaReport = () => {

    var fakeDataChannel = {
        title: ' -> Selezionare quali dati avere all\'interno del Report',
        data : [
        { id: 1, Name:'PV_PMT', Value:false, IsBoolean:"True", Description:'Pressione Monte'},
        { id: 2, Name:'PV_PVL', Value:false, IsBoolean:"True", Description:'Pressione Valle'},
        { id: 3, Name:'PV_TCL', Value:false, IsBoolean:"True", Description:'Temperatura Cella'},
        { id: 4, Name:'PV_TFL', Value:false, IsBoolean:"True", Description:'Temperatura Fluido'},
        { id: 5, Name:'PV_QFL', Value:false, IsBoolean:"True", Description:'Portata Fluido'},
    ]
    };

    var fakeDataAcq = {
        title: ' -> Inserire "ogni quanto" e "per quanto" acquisire i dati',
        data : [
            { id: 1, Name:'SP_AI', Value:0, IsBoolean:"False",Description:'Intervallo Acquisizione [Sec]'},
            { id: 2, Name:'SP_AD', Value:0, IsBoolean:"False",Description:'Durata Acquisizione [Sec]'},
        ]
    };


    const [dataChannel, setDataChannel] = useState(fakeDataChannel);
    const [dataAcquisition, setDataAcquisition] = useState(fakeDataAcq);



    return (
        <div className={'div_container_pageReport'}>
            <div className={'div_title_pageReport'}>
               <h2>Pagina generazione LOG!</h2>
            </div>

            <div className={'div_body_pageReport'}>
                <TotalParameters
                    lDataAcquisition={dataAcquisition}
                    returnDataAcq={setDataAcquisition}
                    lDataChannels={dataChannel}
                    returnDataChs={setDataChannel}
                />
                <GestRiepilogo  lDataAcquisition={dataAcquisition} lDataChannels={dataChannel}/>
            </div>
        </div>
    );
};

export default PaginaReport;