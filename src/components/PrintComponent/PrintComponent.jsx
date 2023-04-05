import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DeleteOutlined} from "@ant-design/icons";
import {Modal, Table} from "antd";
import axios from "axios";
import {setUsers} from "../../store/BankUsersSlice";
import BankClientsApiWorker from "../Api/UserApi";

const PrintComponent = () => {

    const users = useSelector(state => state.bankUsers.users);
    const dispatch = useDispatch();
    let bankClientsApiWorker = new BankClientsApiWorker();

    const loadUsers = () => {
        bankClientsApiWorker.getAllBankClients()
            .then(response => {
                dispatch(setUsers(response.data));
            });
    }

    const columns = [
        {
            key: "1",
            title: "ИД",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "ФИО",
            dataIndex: "fio",
        },
        {
            key: "3",
            title: "Номер карты",
            dataIndex: "cardNumber",
        },
        {
            key: "4",
            title: "Бланас",
            dataIndex: "money",
        },
        {
            key: "5",
            title: "Действия",
            render: (record) => {
                return (
                    <div>
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteUser(record);
                            }}
                            style={{color: "red", marginLeft: 12}}
                        />
                    </div>
                );
            },
        }
    ];

    const deleteUserById = (id) => {
        axios.delete(`https://localhost:7109/BankClients/DeleteById/${id}`)
            .then(response => {
                loadUsers();
            });
    }

    const onDeleteUser = (record) => {
        Modal.confirm({
            title: "Точно удалить клиента?",
            okText: "Да",
            okType: "danger",
            onOk: () => {
                deleteUserById(record.id);
            },
        });
    };

    return (
        <div>
            <Table dataSource={users} columns={columns}
                   pagination={{defaultPageSize: 2, showSizeChanger: true, pageSizeOptions: ['2', '5', '10']}}/>
        </div>
    );
};

export default PrintComponent;