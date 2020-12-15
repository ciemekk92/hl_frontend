import { AxiosResponse } from 'axios';

export const handleResponse = (res: AxiosResponse) => {
    const data = res.data.data.user;

    return {
        userInfo: data,
        token: res.data.token,
        tokenExpires: res.data.expires,
        status: res.status
    };
};
