import React, { useEffect } from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import LogoSmall from '../../components/UI/LogoSmall/LogoSmall';
import axiosInstance from '../../helpers/axiosInstance/axiosInstance';

const App: React.FC = () => {
    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axiosInstance.get('/csrf-token');
            axiosInstance.defaults.headers.post['X-CSRF-Token'] =
                data.csrfToken;
        };

        getCsrfToken();
    });

    return <MainLayout />;
};

export default App;
