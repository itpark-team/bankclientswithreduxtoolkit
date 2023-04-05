import React from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUsers} from "../../store/BankUsersSlice";
import {Button} from "antd";
import BankClientsApiWorker from "../Api/UserApi";

const LoadComponent = () => {

    const dispatch = useDispatch();
    let bankClientsApiWorker = new BankClientsApiWorker();

    const loadUsers = () => {
        bankClientsApiWorker.getAllBankClients()
            .then(response => {
                dispatch(setUsers(response.data));
            });
    }

    return (
        <div>
            <Button type={"primary"} onClick={loadUsers}>Load Users</Button>
        </div>
    );
};

export default LoadComponent;