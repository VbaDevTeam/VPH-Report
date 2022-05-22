import React, {useState} from 'react';
import './list_parameteres.css'
import SingleParameter from "../sing_param/single_parameter";


const ListParameters = ({Data, returnData}) => {
    const [lData, setLData] = useState(Data);


    const handlerParam = (data) => {
        console.table("listParameters", data);
        const tmpData = Object.assign({}, lData);
        let element = lData.data.find(el => el.id === data.id);
        let idxEl = lData.data.indexOf(element);
        tmpData.data[idxEl] = data;
        setLData(tmpData);
        returnData(tmpData);
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