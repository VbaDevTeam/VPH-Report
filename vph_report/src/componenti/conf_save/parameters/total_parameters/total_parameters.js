import React, {useContext} from 'react';
import ListParameters from "../list_params/list_parameters";
import './total_parameters.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectDataAcq,
    selectDataChs,
    setDataAcquisition,
    setDataChannels
} from "../../../../Redux/conrepoSlice";


const TotalParameters = () => {
    const dispatch = useDispatch();
    const dataChannel = useSelector(selectDataChs);
    const dataAcquisition = useSelector(selectDataAcq);

    return (
        <div className={'div_container_totalPar'}>
            <ListParameters Data={dataChannel} returnData={(value) => dispatch(setDataChannels(value))}/>
            <ListParameters Data={dataAcquisition} returnData={(value) => dispatch(setDataAcquisition(value))}/>
        </div>
    );
};

export default TotalParameters;