import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        username: "",
        password: "",
        name: "",
        email: "",
        telephone: "",
        favoriteList: []
    
}
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: {
            reducer(state, action) {
                state.username = action.payload.username;
                state.password = action.payload.password;
                state.name = action.payload.name;
                state.telephone = action.payload.telephone;
                state.favoriteList = action.payload.favoriteList;
            }
        }
    }
})
export const { changeUser } = userReducer.actions;

export default userReducer.reducer