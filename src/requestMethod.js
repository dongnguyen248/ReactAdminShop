import axios from "axios";

const BASE_URL = "http://localhost:3000/api";
let userLocalStorage =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
let TOKEN ="";
if(userLocalStorage.currentUser != null){
     TOKEN = userLocalStorage.accessToken;
}

export const publicRequest = axios.create({
    baseURL:BASE_URL
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bear ${TOKEN}`}
})