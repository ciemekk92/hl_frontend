import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../themes/colorTheme';
import { Main, Wrapper } from './MainLayout.styled';
import Header from '../../containers/Header/Header';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const MainLayout: React.FC = (props) => {
    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    useOutsideClick(modalRef, () => {
        setOpenModal(false);
    });

    const [openModal, setOpenModal] = useState(false);
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
                    <Modal open={openModal} ref={modalRef} />
                    {loggedInView}
                    {/* Routes here*/}
                </Wrapper>
            </ThemeProvider>
        </React.Suspense>
    );
};

export default MainLayout;
