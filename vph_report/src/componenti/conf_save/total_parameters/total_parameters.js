import React, {useContext} from 'react';
import ListParameters from "../parameters/list_params/list_parameters";
import './total_parameters.css';
import {DataContext} from "../../../Context";

const TotalParameters = () => {
    const { val1, val2 } = useContext(DataContext);
    const [dataChannel, setDataChannel] = val1;
    const [dataAcquisition, setDataAcquisition] = val2;

    return (
        <div className={'div_container_totalPar'}>
            <ListParameters Data={dataChannel} returnData={setDataChannel}/>
            <ListParameters Data={dataAcquisition} returnData={setDataAcquisition}/>
        </div>
    );
};

export default TotalParameters;