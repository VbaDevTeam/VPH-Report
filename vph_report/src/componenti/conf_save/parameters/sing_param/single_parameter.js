import React, {useEffect, useState} from 'react';
import './s_parameter.css';
import { FcCheckmark } from 'react-icons/fc';

const SingleParameter = ({lElement, returnElement}) => {
    const [myElement, setMyElement] = useState(lElement);
    const [lValue, setLValue] = useState();

    const setValueElement = (value) =>{
        const tmpElement = Object.assign({}, myElement);
        tmpElement["Value"] = value;
        setMyElement(tmpElement);
        returnElement(tmpElement);
    }

    return (

        <div className={"div_container"}>
            {
                lElement.IsBoolean === "True"
                    ?
                    <div className={'div_check'} >
                        <button onClick={()=>{setValueElement(!myElement.Value)}}>
                            { myElement.Value ? <FcCheckmark size={40}/> : ""}
                        </button>
                    </div>
                    :
                    <div className={'div_input_sp_params'} >
                        <input type="number" onChange={(e)=>{setLValue(e.target.value)}} onBlur={()=>{setValueElement(lValue)}} value={lValue}/>

                    </div>
            }
            <div className={'div_label'}>
                {lElement.Description}
            </div>
        </div>
    );
};

export default SingleParameter;