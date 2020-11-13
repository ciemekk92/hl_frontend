import { SET_USER_INFO, UserActionTypes, UserInfo } from '../types/types';

export function setUserInfo(newInfo: UserInfo): UserActionTypes {
    return {
        type: SET_USER_INFO,
        userInfo: newInfo
    };
}
