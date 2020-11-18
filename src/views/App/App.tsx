import React, { useEffect } from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import axiosInstanceAuth from '../../helpers/axiosInstances/axiosInstanceAuth';
import { authService } from '../../services/authService';
import cookie from 'react-cookies';

const App: React.FC = () => {
    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axiosInstanceAuth.get('/csrf-token');
            axiosInstanceAuth.defaults.headers.post['X-CSRF-Token'] =
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
