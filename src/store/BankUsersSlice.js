import {createSlice} from "@reduxjs/toolkit";

export const bankUsersSlice = createSlice({
    name: "bankUsersSlice",
    initialState: {
        users: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const {setUsers} = bankUsersSlice.actions;
export default bankUsersSlice.reducer;