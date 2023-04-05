import {configureStore} from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import BankUsersSlice, {bankUsersSlice} from "./BankUsersSlice";

export const store = configureStore({
    reducer: {
        data: DataSlice,
        bankUsers: BankUsersSlice
    }
})