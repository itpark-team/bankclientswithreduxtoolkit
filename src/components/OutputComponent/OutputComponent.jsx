import React from 'react';
import {useSelector} from "react-redux";

const OutputComponent = () => {

    const name = useSelector(state => state.data.name);
    const age = useSelector(state => state.data.age);

    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
        </div>
    );
};

export default OutputComponent;