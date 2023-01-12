import axios from 'axios';

const API_URL="http://localhost:3002/users";

export const addTrack=async(data)=>{
    try{
       return await axios.post(API_URL,data);
    } catch(error){
        console.log('Error while calling addTrack api',error.message);
    }
}

export const getUsers=async()=>{
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log("Error while calling",error.message);
    }
}

export const getUser=async(data)=>{
    try{
        return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while calling",error.message);
    }
}

export const editUser=async(data,name)=>{
    try{
        return await axios.put(`${API_URL}/${name}`,data);
    }catch(error){
        console.log("error",error.message);
    }
}

export const deleteUser=async (name)=>{
    try{
        return await axios.delete(`${API_URL}/${name}`);
    }catch(error){
        console.log('Error while calling deleteUser api',error.message);
    }
}