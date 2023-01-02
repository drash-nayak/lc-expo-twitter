import axios from "axios";

const instance = axios.create({
    baseURL: 'http://lc-backend-twitter.test/api'
});

export default instance;