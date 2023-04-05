import React from 'react';
import {useDispatch} from "react-redux";
import {setAge, setName} from "../../store/DataSlice";

const InputComponent = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={event => dispatch(setName(event.target.value))}/> <br/>
            <input type="number" onChange={event => dispatch(setAge(Number(event.target.value)))}/>
        </div>
    );
};

export default InputComponent;