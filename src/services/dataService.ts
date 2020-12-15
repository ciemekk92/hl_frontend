import { store } from '../store/store';
import axiosInstanceData from '../helpers/axiosInstances/axiosInstanceData';
import {
    setCasesInfo,
    setLocationsInfo,
    setProductInfo,
    setQuestionsInfo
} from '../store/actions/actions';

const getAllProducts = async () => {
    const state = store.getState();

    const response = await axiosInstanceData.get('/products', {
        headers: { Authorization: `Bearer ${state.user.token}` }
    });
    await store.dispatch(setProductInfo(response.data.data.data));
};

const getAllCases = async () => {
    const state = store.getState();

    const response = await axiosInstanceData.get('/cases', {
        headers: { Authorization: `Bearer ${state.user.token}` }
    });
    await store.dispatch(setCasesInfo(response.data.data.data));
};

const getAllQuestions = async () => {
    const state = store.getState();

    const response = await axiosInstanceData.get('/questions', {
        headers: { Authorization: `Bearer ${state.user.token}` }
    });

    await store.dispatch(setQuestionsInfo(response.data.data.data));
};

const getAllLocations = async () => {
    const state = store.getState();

    const response = await axiosInstanceData.get('/locations', {
        headers: { Authorization: `Bearer ${state.user.token}` }
    });

    await store.dispatch(setLocationsInfo(response.data.data.data));
};
export const dataService = {
    getAllProducts,
    getAllCases,
    getAllQuestions,
    getAllLocations
};
