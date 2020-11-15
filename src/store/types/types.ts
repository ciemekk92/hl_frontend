// State types
export interface UserInfo {
    name: string;
    email: string;
    role: string;
}

export interface UserState {
    userInfo: UserInfo;
    token: string;
    tokenExpires: number;
}

// Action types

export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGOUT = 'SET_LOGOUT';

export interface SetLoginInfoAction {
    type: typeof SET_LOGIN_INFO;
    userInfo: UserInfo;
    token: string;
    tokenExpires: number;
}

export interface SetUserInfoAction {
    type: typeof SET_USER_INFO;
    userInfo: UserInfo;
}

export interface SetTokenAction {
    type: typeof SET_TOKEN;
    token: string;
    tokenExpires: number;
}

export interface SetLogoutAction {
    type: typeof SET_LOGOUT;
}

export type UserActionTypes =
    | SetLoginInfoAction
    | SetUserInfoAction
    | SetTokenAction
    | SetLogoutAction;
