import React from 'react';
import InputComponent from "./components/InputComponent/InputComponent";
import OutputComponent from "./components/OutputComponent/OutputComponent";
import LoadComponent from "./components/LoadComponent/LoadComponent";
import PrintComponent from "./components/PrintComponent/PrintComponent";

const App = () => {
    return (
        <div>
            {/*<InputComponent/>*/}
            {/*<OutputComponent/>*/}
            <LoadComponent/>
            <PrintComponent/>
        </div>
    );
};

export default App;