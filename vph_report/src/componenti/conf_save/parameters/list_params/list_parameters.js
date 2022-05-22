import React, {useState} from 'react';
import './list_parameteres.css'
import SingleParameter from "../sing_param/single_parameter";


const ListParameters = ({Data, returnData}) => {
    const [lData, setLData] = useState(Data);


    const handlerParam = (data) => {
        console.table("listParameters", data);
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
                        <SingleParameter lElement={x} returnElement={handlerParam} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListParameters;