import Axios from "axios";



const api = Axios.create({
    timeout: 5000,
    baseURL: 'http://192.168.0.100/'
});

export default api;
