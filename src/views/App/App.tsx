import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import MainLayout from '../../templates/MainLayout/MainLayout';
import axiosInstance from '../../helpers/axiosInstance/axiosInstance';
import { authService } from '../../services/authService';

const App: React.FC = () => {
    const cookies = new Cookies();

    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axiosInstance.get('/csrf-token');
            axiosInstance.defaults.headers.post['X-CSRF-Token'] =
                data.csrfToken;
        };

        getCsrfToken().then((res) => {
            authService.refresh();
        });
    });

    return <MainLayout />;
};

export default App;
