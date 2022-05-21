import React, {useEffect, useState} from 'react';
import './s_parameter.css';


const SingleParameter = ({StateParam, DescrParam}) => {
    const [lState, setLState] = useState(StateParam);


    // useEffect(()=>{
    //     setLState(StateParam)
    // },[])


    return (
        <div className={"div_container"}>
            <div className={'div_check'}>
                <input type="checkbox" defaultChecked={lState}/>
            </div>
            <div className={'div_label'}>
                {DescrParam}
            </div>
        </div>
    );
};

export default SingleParameter;