import { store } from '../store/store';
import axiosInstanceAuth from '../helpers/axiosInstances/axiosInstanceAuth';
import { handleResponse } from '../helpers';
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
            await axiosInstanceAuth.post(
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

        setTimeout(() => {
            refresh();
        }, responseData.tokenExpires * 0.95);
    } catch (err) {
        console.log(err);
    }
};

const logout = async () => {
    store.dispatch(setLogout());
    currentUserSubject.next({
        name: '',
        email: '',
        role: '',
        token: '',
        tokenExpires: ''
    });
    await axiosInstanceAuth.post('/users/logout');
    // TODO invalidate refresh token
};

const changePassword = async (passwordData: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}) => {
    try {
        const responseData: {
            userInfo: any;
            token: string;
            tokenExpires: number;
        } = await handleResponse(
            await axiosInstanceAuth.patch(
                '/users/updatePassword',
                {
                    passwordCurrent: passwordData.currentPassword,
                    password: passwordData.newPassword,
                    passwordConfirm: passwordData.confirmPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${currentUserSubject.value.token}`
                    }
                }
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
            ...currentUserSubject.value,
            token: responseData.token,
            tokenExpires: responseData.tokenExpires
        });
    } catch (err) {
        console.log(err);
    }
};

async function refresh() {
    try {
        const axiosResponse = await axiosInstanceAuth.post('/users/refresh');
        const res = await handleResponse(axiosResponse);

        await currentUserSubject.next({
            name: res!.userInfo.name,
            email: res!.userInfo.email,
            role: res!.userInfo.role,
            token: res!.token,
            tokenExpires: res!.tokenExpires
        });

        await store.dispatch(
            setLoginInfo(res!.userInfo, res!.token, res!.tokenExpires)
        );
        setTimeout(() => {
            refresh();
        }, res!.tokenExpires * 0.95);
    } catch (err) {
        console.log(err);
    }
}

export const authService = {
    login,
    logout,
    refresh,
    changePassword,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    }
};
