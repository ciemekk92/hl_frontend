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
        // const getCsrfToken = async () => {
        //     const { data } = await axiosInstanceAuth.get('/csrf-token');
        //     axiosInstanceAuth.defaults.headers.post['X-XSRF-Token'] =
        //         data.csrfToken;
        //     axiosInstanceAuth.defaults.headers.patch['X-XSRF-Token'] =
        //         data.csrfToken;
        //
        //     console.log(
        //         axiosInstanceAuth.defaults.headers.patch['X-CSRF-Token']
        //     );
        // };

        if (!cookie.load('firstUse')) {
            cookie.save('firstUse', 'true', {
                httpOnly: false,
                secure: true,
                domain: '.cc.healthlabs.pl'
            });
        }

        if (cookie.load('firstUse') !== 'true') {
            authService.refresh();
        }
    });

    return <MainLayout />;
};

export default App;
