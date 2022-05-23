import React from 'react';
import ListParameters from "../list_params/list_parameters";
import './total_parameters.css';

const TotalParameters = () => {
    var fakeData = [
        { id: 1, Name:'PV_MT', Description:'Pressione Monte'},
        { id: 2, Name:'PV_MT', Description:'Pressione Valle'},
        { id: 3, Name:'PV_MT', Description:'Temperatura Cella'},
        { id: 4, Name:'PV_MT', Description:'Temperatura Fluido'},
        { id: 5, Name:'PV_MT', Description:'Portata Fluido'},
    ]
    var titleDataCanali = ' -> Selezionare quali dati avere all\'interno del Report';

    var fakeDataAcq = [
        { id: 1, Name:'PV_MT', Description:'Intervallo Acquisizione'},
        { id: 2, Name:'PV_MT', Description:'Frequenza Acquisizione'},
    ]
    var titleDataAcq = ' -> Inserire \"ogni quanto\" e \"per quanto\" acquisire i dati';


    return (
        <div className={'div_container_totalPar'}>
            <ListParameters Data={fakeData} Title={titleDataCanali}/>
            <ListParameters Data={fakeDataAcq} Title={titleDataAcq}/>
        </div>
    );
};

export default TotalParameters;