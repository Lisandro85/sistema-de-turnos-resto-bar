import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const localStorageName=localStorage.getItem("userName")
const localStorageUserId=localStorage.getItem("userId")


export const loginUser=createAsyncThunk("user/login",async(userLoginData,{dispatch,rejectWithValue})=>{
    try {
        const {data}=await axios.post("http://localhost:3000/users/login",userLoginData)
        dispatch(setUser(data.data.result))
    } catch (error) {
        return rejectWithValue(error);  
    }
});

export const getAppointments=createAsyncThunk("appointments/getAppointments",async(userId,{dispatch,rejectWithValue})=>{
    try {
        const {data}=await axios.get(`http://localhost:3000/users/${userId}`)
        dispatch(setUserAppointments(data.data.appointments))
    } catch (error) {
        return rejectWithValue(error);  
    }
});

export const cancelAppointment=createAsyncThunk("appointments/cancelAppointments",async(appointmentId,{dispatch,rejectWithValue})=>{
    try {
        await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`)
        dispatch(cancelUserAppointment(appointmentId))
    } catch (error) {
        return rejectWithValue(error);  
    }
});

export const postAppointment=createAsyncThunk("appointments/createAppointments",async(values,{dispatch,rejectWithValue})=>{
    try {
        await axios.post(`http://localhost:3000/appointments/schedule`,values)
        //dispatch(cancelUserAppointment(appointmentId))
    } catch (error) {
        console.log(error)
        return rejectWithValue(error);  
    }
});

export const registerUser=createAsyncThunk("user/register",async(values,{dispatch,rejectWithValue})=>{
    try {
        await axios.post("http://localhost:3000/users/register",values)
    } catch (error) {
        console.log(error)
        return rejectWithValue(error);  
    }
});

const userSlice=createSlice({
name:"userSlice",
initialState:{
    user:localStorageUserId || null,
    userAppointments:[],
    userName:localStorageName || null
},
reducers:{
    setUser:(state,action)=>{
        state.userName=action.payload.name
        state.user=action.payload.id;
        localStorage.setItem("userName",action.payload.name)
        localStorage.setItem("userId",action.payload.id)
    },
    setUserAppointments:(state,action)=>{
        state.userAppointments=action.payload
    },
    cancelUserAppointment:(state,action)=>{
        state.userAppointments=state.userAppointments.map((appointment)=>{
        return appointment.id===action.payload?
            {...appointment,status:"cancelled"}:appointment;
        })
    },
    logOutUser:(state)=>{
        state.user=null,
        state.userAppointments=[],
        state.userName=null,
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")

    }
}
});

export const {setUser,setUserAppointments,cancelUserAppointment,logOutUser}=userSlice.actions;
export default userSlice.reducer;

