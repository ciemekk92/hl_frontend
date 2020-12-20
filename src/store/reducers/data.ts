import { updateObject } from '../../shared/utility';
import {
    DataActionTypes,
    DataState,
    SET_CASES_INFO,
    SET_LINKS_INFO,
    SET_LOCATIONS_INFO,
    SET_PRODUCT_INFO,
    SET_QUESTIONS_INFO,
    SetCasesInfoAction,
    SetLinksInfoAction,
    SetLocationsInfoAction,
    SetProductInfoAction,
    SetQuestionsInfoAction
} from '../types/types';

const initialState: DataState = {
    products: [],
    cases: [],
    locations: [],
    questions: [],
    links: []
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

const setLinksInfo = (state: DataState, action: SetLinksInfoAction) => {
    return updateObject(state, {
        links: action.links
    });
};

// Reducer
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
        case SET_LINKS_INFO:
            return setLinksInfo(state, action);
        default:
            return state;
    }
};

export default reducer;
