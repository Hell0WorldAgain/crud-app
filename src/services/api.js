import axios from 'axios';

const API_URL = 'http://localhost:3002/users' ;

export const addUser = async(data) => {
    try {
    return await axios.post (API_URL, data);
    }
    catch (error){
        console.log ('Error while calling addUser API', error.message)
    }
}

export const getUser = async () => {
    try {
        return await axios.get(API_URL);
    }
    catch (error) {
        console.log ("Error while calling getUser API" , error.message);
    }
}

export const getUserByID = async (data) => {
    try {
        return await axios.get (`${API_URL}/${data}`);
    }
    catch (error) {
        console.log ("Error while calling getUserByID API" , error.message);
    }
}


export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    }
    catch(error){
        console.log("Error while calling editUser API", error.message)
    }
}


export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    } catch{
        console.log("Error while calling deleteUser API", error.message)
    }
}