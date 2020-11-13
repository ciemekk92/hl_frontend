import { updateObject } from '../../shared/utility';
import {
    SET_USER_INFO,
    UserActionTypes,
    UserState,
    SetUserInfoAction
} from '../types/types';

const initialState: UserState = {
    userInfo: {
        id: ''
    }
};

// Actions:

const setUserInfo = (state: UserState, action: SetUserInfoAction) => {
    return updateObject(state, {
        userInfo: action.userInfo
    });
};

const reducer = (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER_INFO:
            return setUserInfo(state, action);
        default:
            return state;
    }
};

export default reducer;
