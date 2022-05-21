import React, {useState} from 'react';
import ListParameters from "../parameters/list_params/list_parameters";
import './total_parameters.css';

const TotalParameters = ({lDataChannels, returnDataChs, lDataAcquisition, returnDataAcq }) => {



    return (
        <div className={'div_container_totalPar'}>
            <ListParameters Data={lDataChannels} returnData={returnDataChs}/>
            <ListParameters Data={lDataAcquisition} returnData={returnDataAcq} />
        </div>
    );
};

export default TotalParameters;