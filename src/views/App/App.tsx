import React, { useEffect } from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import axiosInstanceAuth from '../../helpers/axiosInstances/axiosInstanceAuth';
import { authService } from '../../services';
import { history } from '../../helpers';
import cookie from 'react-cookies';
import { store } from '../../store/store';

const App: React.FC = () => {
    useEffect(() => {
        history.push('/');
        const getCsrfToken = async () => {
            const { data } = await axiosInstanceAuth.get('/csrf-token');
            axiosInstanceAuth.defaults.headers.post['X-CSRF-Token'] =
                data.csrfToken;
            axiosInstanceAuth.defaults.headers.patch['X-CSRF-Token'] =
                data.csrfToken;
        };

        if (!cookie.load('firstUse')) {
            cookie.save('firstUse', 'true', { httpOnly: false });
        }

        getCsrfToken().then((res) => {
            if (cookie.load('firstUse') !== 'true') {
                authService.refresh();
            }
        });
    });

    return <MainLayout />;
};

export default App;
