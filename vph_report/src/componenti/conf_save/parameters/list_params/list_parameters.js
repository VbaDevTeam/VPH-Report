import React from 'react';
import Single_parameter from "../sing_param/single_parameter";
import './list_parameteres.css'
const ListParameters = ({Title, Data}) => {
    return (
        <div className={'div_container_list'}>
            <div className={'div_title'}>
                <h3>{Title}</h3>
            </div>
            <div className={'div_list'}>
                <ul>
                    {Data.map(x => (
                        <li key={x.id}>
                            <Single_parameter StateParam={false} DescrParam={x.Description}  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListParameters;