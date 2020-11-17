import axios from 'axios';
import { authService } from '../../services/authService';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (401 === error.response.status) {
            authService.logout();
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;
