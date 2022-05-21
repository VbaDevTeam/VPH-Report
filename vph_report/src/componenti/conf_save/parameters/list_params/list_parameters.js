import React, {useState} from 'react';
import Single_parameter from "../sing_param/single_parameter";
import './list_parameteres.css'
const ListParameters = ({Data, returnData}) => {
    const [lData, setLData] = useState(Data);


    const handlerParam = (data) => {
        const tmpRow = Object.assign({}, lData);
        var element = lData.data.find(el => el.id === data.id);
        var idxEl = lData.data.indexOf(element);
        tmpRow.data[idxEl] = data;
        setLData(tmpRow);
        returnData(tmpRow);
    }

    return (
        <div className={'div_container_list'}>
            <div className={'div_title'}>
                <h3>{Data.title}</h3>
            </div>
            <div className={'div_list'}>
                <ul>
                    {Data.data.map(x => (
                        <Single_parameter lRow={x} returnRow={handlerParam} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListParameters;