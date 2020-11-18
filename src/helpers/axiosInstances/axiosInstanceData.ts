import axios from 'axios';
import { authService } from '../../services/authService';
import { store } from '../../store/store';

const axiosInstanceData = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
});

axiosInstanceData.defaults.headers.common['Authorization'] = `Bearer ${
    store.getState().user.token
}`;

export default axiosInstanceData;
