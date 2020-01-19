import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://api.localhost'
});

export default api;
