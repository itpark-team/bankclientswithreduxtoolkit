import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        name: "",
        age: 0
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

export const {setName, setAge} = dataSlice.actions;
export default dataSlice.reducer;