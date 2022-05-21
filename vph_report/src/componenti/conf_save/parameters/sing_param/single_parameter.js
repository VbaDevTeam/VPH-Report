import React, {useEffect, useState} from 'react';
import './s_parameter.css';
import { FcCheckmark } from 'react-icons/fc';

const SingleParameter = ({lRow, returnRow}) => {
    const [myRow, setMyRow] = useState(lRow);
    const [lValue, setLValue] = useState();

    const handleOnblur = ()=>{
        // console.log("onBlur!! da implementare l'invio indietro dei dati salvati!");
        // console.table("lValue", lValue);
        const tmpRow = Object.assign({}, myRow);
        tmpRow["Value"] = lValue;
        setMyRow(tmpRow);
        console.table("MyRow", myRow);
        console.log("On blurs " + lValue);
        returnRow(tmpRow);
    }

    const onClickCheck = () => {
        const tmpRow = Object.assign({}, myRow);
        tmpRow["Value"] = !tmpRow.Value;
        setMyRow(tmpRow);
        returnRow(tmpRow);
    }

    return (
        <div className={"div_container"}>

            {

                lRow.IsBoolean === "True"
                ?
                    <div className={'div_check'} >
                        <button onClick={onClickCheck}>
                        { myRow.Value ? <FcCheckmark size={40}/> : ""}
                        </button>
                    </div>
                :
                    <div className={'div_input_sp_params'} >
                        <input type="number" onChange={(e)=>{setLValue(e.target.value)}} onBlur={handleOnblur} value={lValue}/>

                    </div>
            }


            <div className={'div_label'}>
                {lRow.Description}
            </div>
        </div>
    );
};

export default SingleParameter;