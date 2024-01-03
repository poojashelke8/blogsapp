import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Pooja'},
    {id:'1',name:'Adarsh'},
    {id:'3',name:'Kirti'},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer