import { store } from '../store/store';
import axiosInstance from '../helpers/axiosInstance/axiosInstance';
import { handleResponse } from '../helpers/handleResponse';
import { setLoginInfo, setLogout } from '../store/actions/actions';
import { BehaviorSubject } from 'rxjs';

const state = store.getState();

const currentUserSubject = new BehaviorSubject({
    ...state.user.userInfo,
    token: state.user.token,
    tokenExpires: state.user.tokenExpires
});

const login = async (email: string, password: string) => {
    try {
        const responseData: {
            userInfo: any;
            token: string;
            tokenExpires: number;
        } = await handleResponse(
            await axiosInstance.post(
                '/users/login',
                { email: email, password: password },
                { headers: { 'Content-Type': 'application/json' } }
            )
        );

        await store.dispatch(
            setLoginInfo(
                responseData.userInfo,
                responseData.token,
                responseData.tokenExpires
            )
        );
        await currentUserSubject.next({
            name: responseData.userInfo.name,
            email: responseData.userInfo.email,
            role: responseData.userInfo.role,
            token: responseData.token,
            tokenExpires: responseData.tokenExpires
        });
    } catch (err) {
        console.log(err);
    }
};

function logout() {
    store.dispatch(setLogout());
    currentUserSubject.next(null);
}

export const authService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    }
};
