import React from 'react';
import TotalParameters from "../componenti/conf_save/parameters/total_parameters/total_parameters";
import GestRiepilogo from "../componenti/conf_save/riepilogo/gest_riepilogo";
import './gestReport.css';

const PaginaReport = () => {
    return (
        <div className={'div_container_pageReport'}>
            <div className={'div_title_pageReport'}>
               <h2>Questa è la nostra applicazione!</h2>
            </div>

            <div className={'div_body_pageReport'}>
                <TotalParameters/>
                <GestRiepilogo/>
            </div>


        </div>
    );
};

export default PaginaReport;