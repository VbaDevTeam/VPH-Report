import React from 'react';
import TotalParameters from "../componenti/conf_save/total_parameters/total_parameters";
import GestRiepilogo from "../componenti/conf_save/riepilogo/gest_riepilogo";
import './gestReport.css';
import BtnVba from "../componenti/Accessories/Button/btnVba";
import {useConrepo} from "../Hooks";

const PaginaReport = () => {
    const {dataChannel, dataAcquisition} = useConrepo();

    const saveDateBackend = async (endpoint, data) => {
        console.log("saveData!?!?");
        console.table('table Data', data);
        let dataJson = JSON.stringify(data)
        console.log(dataJson)
        let obj = {};
        obj["dataconf"] = dataJson;

        const response = await fetch(endpoint,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            });
        const content = await response.json();
        if(response.status === 200)
        {
            alert("success")
        }
        else {
            alert("Errore!!")
        }
        return content;
    }

    const onclickSave = () =>{
        var objData = {}
        objData["dataChannel"] = dataChannel;
        objData["dataAcquisition"] = dataAcquisition;
        saveDateBackend('pippo', objData);
    }


    return (
        <div className={'div_container_pageReport'}>
            <div className={'div_header_pageReport'}>
               <h2>Pagina generazione LOG!</h2>
                <BtnVba textButton={"Salva"} onClickVba={onclickSave}/>
            </div>

            <div className={'div_body_pageReport'}>
                <TotalParameters/>
                <GestRiepilogo/>
            </div>
        </div>
    );
};

export default PaginaReport;