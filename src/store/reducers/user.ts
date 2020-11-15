import { updateObject } from '../../shared/utility';
import {
    SET_LOGIN_INFO,
    SET_LOGOUT,
    SET_TOKEN,
    SET_USER_INFO,
    SetLoginInfoAction,
    SetLogoutAction,
    SetTokenAction,
    SetUserInfoAction,
    UserActionTypes,
    UserState
} from '../types/types';

const initialState: UserState = {
    userInfo: {
        name: '',
        email: '',
        role: ''
    },
    token: '',
    tokenExpires: 0
};

// Actions:

const setLoginInfo = (state: UserState, action: SetLoginInfoAction) => {
    return updateObject(state, {
        userInfo: action.userInfo,
        token: action.token,
        tokenExpires: action.tokenExpires
    });
};

const setUserInfo = (state: UserState, action: SetUserInfoAction) => {
    return updateObject(state, {
        userInfo: action.userInfo
    });
};

const setToken = (state: UserState, action: SetTokenAction) => {
    return updateObject(state, {
        token: action.token,
        tokenExpires: action.tokenExpires
    });
};

const setLogout = (state: UserState, action: SetLogoutAction) => {
    return updateObject(state, initialState);
};

const reducer = (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case SET_LOGIN_INFO:
            return setLoginInfo(state, action);
        case SET_USER_INFO:
            return setUserInfo(state, action);
        case SET_TOKEN:
            return setToken(state, action);
        case SET_LOGOUT:
            return setLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
