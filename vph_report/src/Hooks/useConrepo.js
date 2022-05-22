import React, {useContext} from 'react';
import {DataContext} from "../Context";

export default function useConrepo() {
    const { val1, val2 } = useContext(DataContext);
    const [dataChannel, setDataChannel] = val1;
    const [dataAcquisition, setDataAcquisition] = val2;
    


    return{
      dataChannel,
      dataAcquisition,
    };

}