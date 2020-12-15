import axios from 'axios';
import { authService } from '../../services';

const axiosInstanceAuth = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    withCredentials: true
});

// TODO error handling with login

// axiosInstanceAuth.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         if (
//             401 === error.response.status &&
//             error.response.config.url !== '/users/refresh'
//         ) {
//             console.log(error.response);
//             authService.logout();
//         } else if (400 === error.response.status) {
//             return error;
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );

export default axiosInstanceAuth;
