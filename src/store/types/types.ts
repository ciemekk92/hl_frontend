// State types
export interface UserInfo {
    id: string;
}

export interface UserState {
    userInfo: UserInfo;
}

// Action types

export const SET_USER_INFO = 'SET_USER_INFO';

export interface SetUserInfoAction {
    type: typeof SET_USER_INFO;
    userInfo: UserInfo;
}

export type UserActionTypes = SetUserInfoAction;
