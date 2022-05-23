import React, {useState} from 'react';
import './list_parameteres.css'
import SingleParameter from "../sing_param/single_parameter";


const ListParameters = ({Data, returnData}) => {
    const [lData, setLData] = useState(Data);


    const handlerParam = (data) => {
        // console.table('lData', lData);
        // console.table("dataArrived", data);
        let tmpRow = Object.assign({}, lData);
        // let element = lData.data.find(el => el.id === data.id);
        let othersEl = lData.data.filter(el => el.id !== data.id);
        // console.table('element', element);
        // let idxEl = lData.data.indexOf(element);
        // console.table('tmpRow', tmpRow);
        othersEl.push(data);
        // tmpRow.data[idxEl] = data;
        // console.table('othersEl', othersEl);
        tmpRow.data = othersEl;
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
                        <li key={x.id}>
                            <SingleParameter id={x.id} lElement={x} returnElement={handlerParam} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListParameters;