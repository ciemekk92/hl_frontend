// State types
// Auth

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
// Data

export interface IngredientsInterface {
    day: {
        name: string;
        dose?: string;
        ingredients: Ingredient[];
    };
    night: {
        name: string;
        dose?: string;
        ingredients: Ingredient[];
    };
    length?: never;
}

export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
    percentage: number;
}

export interface DetailedInfo {
    name: string;
    details: string[];
    explanation?: string[];
}

export interface ProductQuestion {
    question: string;
    answer: string[];
}

export interface Product {
    name: string;
    slug: string;
    ingredients: IngredientsInterface;
    storage: DetailedInfo[];
    dosage: DetailedInfo[];
    recommendedFor: DetailedInfo[];
    needsApproval: DetailedInfo[];
    notRecommendedFor: DetailedInfo[];
    sideEffects: DetailedInfo[];
    questions: ProductQuestion[];
}

interface CaseProduct {
    name: string;
    ingredients: { name: string; details: string }[];
}

export interface Case {
    name: string;
    products: CaseProduct[];
}

export interface BranchLocation {
    city: string;
    address: string;
}

export interface Question {
    question: string;
    answer: string;
}

export interface DataState {
    products: Product[];
    cases: Case[];
    locations: BranchLocation[];
    questions: Question[];
}

// Action types
// Auth
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

// Data
export const SET_PRODUCT_INFO = 'SET_PRODUCT_INFO';
export const SET_CASES_INFO = 'SET_CASES_INFO';
export const SET_LOCATIONS_INFO = 'SET_LOCATIONS_INFO';
export const SET_QUESTIONS_INFO = 'SET_QUESTIONS_INFO';

export interface SetProductInfoAction {
    type: typeof SET_PRODUCT_INFO;
    products: Product[];
}

export interface SetCasesInfoAction {
    type: typeof SET_CASES_INFO;
    cases: Case[];
}

export interface SetLocationsInfoAction {
    type: typeof SET_LOCATIONS_INFO;
    locations: BranchLocation[];
}

export interface SetQuestionsInfoAction {
    type: typeof SET_QUESTIONS_INFO;
    questions: Question[];
}

export type DataActionTypes =
    | SetProductInfoAction
    | SetCasesInfoAction
    | SetLocationsInfoAction
    | SetQuestionsInfoAction;
