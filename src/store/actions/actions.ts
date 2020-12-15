import {
    BranchLocation,
    Case,
    DataActionTypes,
    Product,
    Question,
    SET_CASES_INFO,
    SET_LOCATIONS_INFO,
    SET_LOGIN_INFO,
    SET_LOGOUT,
    SET_PRODUCT_INFO,
    SET_QUESTIONS_INFO,
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

export function setProductInfo(productInfo: Product[]): DataActionTypes {
    return {
        type: SET_PRODUCT_INFO,
        products: productInfo
    };
}

export function setCasesInfo(casesInfo: Case[]): DataActionTypes {
    return {
        type: SET_CASES_INFO,
        cases: casesInfo
    };
}

export function setQuestionsInfo(questionsInfo: Question[]): DataActionTypes {
    return {
        type: SET_QUESTIONS_INFO,
        questions: questionsInfo
    };
}

export function setLocationsInfo(
    locationsInfo: BranchLocation[]
): DataActionTypes {
    return {
        type: SET_LOCATIONS_INFO,
        locations: locationsInfo
    };
}
