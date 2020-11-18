import { updateObject } from '../../shared/utility';
import {
    DataActionTypes,
    DataState,
    SET_CASES_INFO,
    SET_LOCATIONS_INFO,
    SET_PRODUCT_INFO,
    SET_QUESTIONS_INFO,
    SetCasesInfoAction,
    SetLocationsInfoAction,
    SetProductInfoAction,
    SetQuestionsInfoAction
} from '../types/types';

const initialState: DataState = {
    products: [],
    cases: [],
    locations: [],
    questions: []
};

// Actions:
const setProductInfo = (state: DataState, action: SetProductInfoAction) => {
    return updateObject(state, {
        products: action.products
    });
};

const setCasesInfo = (state: DataState, action: SetCasesInfoAction) => {
    return updateObject(state, {
        cases: action.cases
    });
};

const setLocationsInfo = (state: DataState, action: SetLocationsInfoAction) => {
    return updateObject(state, {
        locations: action.locations
    });
};

const setQuestionsInfo = (state: DataState, action: SetQuestionsInfoAction) => {
    return updateObject(state, {
        questions: action.questions
    });
};

/// Reducer
const reducer = (state = initialState, action: DataActionTypes) => {
    switch (action.type) {
        case SET_PRODUCT_INFO:
            return setProductInfo(state, action);
        case SET_CASES_INFO:
            return setCasesInfo(state, action);
        case SET_LOCATIONS_INFO:
            return setLocationsInfo(state, action);
        case SET_QUESTIONS_INFO:
            return setQuestionsInfo(state, action);
        default:
            return state;
    }
};

export default reducer;
