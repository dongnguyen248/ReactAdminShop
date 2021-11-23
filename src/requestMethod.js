import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
let TOKEN = '';
if (localStorage.getItem('persist:root') != null) {
    let userLocalStorage = JSON.parse(
        JSON.parse(localStorage.getItem('persist:root')).user,
    );
    if (userLocalStorage.currentUser != null) {
        TOKEN = userLocalStorage.currentUser.accessToken;
    }
}
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bear ${TOKEN}` },
});
