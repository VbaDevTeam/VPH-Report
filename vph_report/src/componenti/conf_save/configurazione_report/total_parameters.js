import React, {useContext} from 'react';
import ListParameters from "../parameters/list_params/list_parameters";
import './total_parameters.css';
import {DataContext} from "../../../Context";
import { useSelector, useDispatch } from 'react-redux';
import {
    selectDataAcq,
    selectDataChs,
    setNewDataAcquisition,
    setNewDataChannels
} from "../../../Redux/conrepoSlice";


const TotalParameters = () => {
    const dispatch = useDispatch();
    const dataChannel = useSelector(selectDataChs);
    const dataAcquisition = useSelector(selectDataAcq);

    const retDataChannel = (valueData)=> {
        dispatch(setNewDataChannels(valueData));
    };

    const retDataAcquisition = (valueData)=> {
        dispatch(setNewDataAcquisition(valueData));
    };

    return (
        <div className={'div_container_totalPar'}>
            <ListParameters Data={dataChannel} returnData={retDataChannel}/>
            <ListParameters Data={dataAcquisition} returnData={retDataAcquisition}/>
        </div>
    );
};

export default TotalParameters;