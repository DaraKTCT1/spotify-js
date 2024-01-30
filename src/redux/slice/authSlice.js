import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token : "",
  user : null,
}

export const authSlice = createSlice({
    
  name: 'auth',
  initialState,
  reducers: {
    setToken : (state,action)=>{
        state.access_token = action.payload;
    },
    setUser : (state,action)=>{
        state.user = action.payload;
    },
  },
})


export const { setToken,setUser } = authSlice.actions

export default authSlice.reducer