import React, { useRef, useState, useEffect } from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../themes/colorTheme';
import { Main, Wrapper } from './MainLayout.styled';
import Header from '../../containers/Header/Header';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Landing from '../../views/Landing/Landing';
import Login from '../../containers/Login/Login';
import { authService } from '../../services';
import { Role } from '../../helpers/role';
import { history } from '../../helpers';
import Routes from '../../routes/routes';

const MainLayout: React.FC = (props) => {
    // TODO: silent refresh, signing up, logging out, role splitting
    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    const [currentUser, setCurrentUser] = useState({
        name: '',
        email: '',
        role: '',
        token: '',
        tokenExpires: 0
    });
    const [isAdmin, setIsAdmin] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(true);

    useEffect(() => {
        authService.currentUser.subscribe((user) => {
            setCurrentUser(user);
            setIsAdmin(user && user.role === Role.Admin);
        });
    });

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
        <BrowserRouter>
            <Route
                render={(props) => (
                    <>
                        <Header />
                        <Sidebar />
                        <Switch>
                            <Main>
                                <Routes {...props} />
                            </Main>
                        </Switch>
                    </>
                )}
            />
        </BrowserRouter>
    );

    const loggedOutView = (
        <Landing toggleLogin={(isLogin: boolean) => openLoginModal(isLogin)} />
    );

    return (
        <React.Suspense fallback={'Loading...'}>
            <Router history={history}>
                <ThemeProvider theme={colorTheme}>
                    <Wrapper>
                        <Modal open={openModal} ref={modalRef}>
                            <Login
                                clickedCancel={closeLoginModal}
                                isLogin={isModalLogin}
                            />
                        </Modal>
                        {currentUser.token !== ''
                            ? loggedInView
                            : loggedOutView}
                        {/* Routes here*/}
                    </Wrapper>
                </ThemeProvider>
            </Router>
        </React.Suspense>
    );
};

export default MainLayout;
