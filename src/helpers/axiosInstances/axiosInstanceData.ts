import axios from 'axios';
import { store } from '../../store/store';

const axiosInstanceData = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    withCredentials: true
});

axiosInstanceData.defaults.headers.common['Authorization'] = `Bearer ${
    store.getState().user.token
}`;

export default axiosInstanceData;
