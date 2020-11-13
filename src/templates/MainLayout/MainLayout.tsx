import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../themes/colorTheme';
import { Main, Wrapper } from './MainLayout.styled';
import Header from '../../containers/Header/Header';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Landing from '../../views/Landing/Landing';
import Login from '../../containers/Login/Login';

const MainLayout: React.FC = (props) => {
    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    const [openModal, setOpenModal] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(true);

    useOutsideClick(modalRef, () => {
        setOpenModal(false);
    });

    const openLoginModal = (isLogin: boolean) => {
        setIsModalLogin(isLogin);
        setOpenModal(true);
    };

    const closeLoginModal = () => {
        setOpenModal(false);
    };

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

    const loggedOutView = (
        <Landing toggleLogin={(isLogin: boolean) => openLoginModal(isLogin)} />
    );

    return (
        <React.Suspense fallback={'Loading...'}>
            <ThemeProvider theme={colorTheme}>
                <Wrapper>
                    <Modal open={openModal} ref={modalRef}>
                        <Login
                            clickedCancel={closeLoginModal}
                            isLogin={isModalLogin}
                        />
                    </Modal>
                    {loggedOutView}
                    {/* Routes here*/}
                </Wrapper>
            </ThemeProvider>
        </React.Suspense>
    );
};

export default MainLayout;
