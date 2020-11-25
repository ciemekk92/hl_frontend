import { AxiosResponse } from 'axios';

export const handleResponse = (res: AxiosResponse) => {
    // TODO 401 error handling

    const data = res.data.data.user;

    if (res.statusText !== 'OK') {
        if ([401, 403].indexOf(res.status) !== -1) {
            // auto logout if response returned 401 or 403
            //authService.logout();

            // eslint-disable-next-line
            location.reload();
        }

        const error = (data && data.message) || res.statusText;
        return Promise.reject(error);
    }

    return {
        userInfo: data,
        token: res.data.token,
        tokenExpires: res.data.expires,
        status: res.status
    };
};
