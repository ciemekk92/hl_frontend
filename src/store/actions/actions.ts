import {
    SET_LOGIN_INFO,
    SET_LOGOUT,
    SET_TOKEN,
    SET_USER_INFO,
    UserActionTypes,
    UserInfo
} from '../types/types';

export function setLoginInfo(
    newUserInfo: UserInfo,
    newToken: string,
    newTokenExpires: number
): UserActionTypes {
    return {
        type: SET_LOGIN_INFO,
        userInfo: newUserInfo,
        token: newToken,
        tokenExpires: newTokenExpires
    };
}

export function setUserInfo(newUserInfo: UserInfo): UserActionTypes {
    return {
        type: SET_USER_INFO,
        userInfo: newUserInfo
    };
}

export function setToken(
    newToken: string,
    newTokenExpires: number
): UserActionTypes {
    return {
        type: SET_TOKEN,
        token: newToken,
        tokenExpires: newTokenExpires
    };
}

export function setLogout(): UserActionTypes {
    return {
        type: SET_LOGOUT
    };
}
