import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../themes/colorTheme';
import { Main, Wrapper } from './MainLayout.styled';
import Header from '../../containers/Header/Header';
import Sidebar from '../../containers/Sidebar/Sidebar';

const MainLayout: React.FC = (props) => {
    const loggedInView = (
        <>
            <Header />
            <Sidebar />
            <Main>
                {/*<Dashboard />*/}
                Main view goes here
            </Main>
        </>
    );

    return (
        <React.Suspense fallback={'Loading...'}>
            <ThemeProvider theme={colorTheme}>
                <Wrapper>
                    {loggedInView}
                    {/* Routes here*/}
                </Wrapper>
            </ThemeProvider>
        </React.Suspense>
    );
};

export default MainLayout;
