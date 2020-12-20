import React, { useRef, useState, useEffect } from 'react';
import { Router, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from '../../themes/colorTheme';
import { Main, Wrapper } from './MainLayout.styled';
import Header from '../../containers/Header/Header';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import Landing from '../../views/Landing/Landing';
import Login from '../../containers/Login/Login';
import { authService } from '../../services';
import { Role } from '../../helpers/role';
import { history } from '../../helpers';
import Routes from '../../routes/routes';
import ChangePassword from '../../containers/ChangePassword/ChangePassword';
import { modalContext } from '../../context/modalContext';

const { Provider } = modalContext;

const MainLayout: React.FC = () => {
    // TODO: role splitting
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

    const openLoginModal = (isLogin: boolean) => {
        setIsModalLogin(isLogin);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const handleModalOpen = () => {
        setOpenModal(!openModal);
    };

    const loggedInView = (
        <HashRouter basename={'/'}>
            <Route
                render={(props) => (
                    <>
                        <Header />
                        <Sidebar />

                        <Main>
                            <Routes {...props} />
                        </Main>

                        <Modal open={openModal} ref={modalRef}>
                            <ChangePassword
                                openModal={openModal}
                                clickedCancel={closeModal}
                            />
                        </Modal>
                    </>
                )}
            />
        </HashRouter>
    );

    const loggedOutView = (
        <>
            <Landing
                toggleLogin={(isLogin: boolean) => openLoginModal(isLogin)}
            />
            <Modal open={openModal} ref={modalRef}>
                <Login
                    clickedCancel={closeModal}
                    isLogin={isModalLogin}
                    opened={openModal}
                />
            </Modal>
        </>
    );

    return (
        <React.Suspense fallback={'Loading...'}>
            <Provider value={{ handleModalOpen }}>
                <Router history={history}>
                    <ThemeProvider theme={colorTheme}>
                        <Wrapper>
                            {currentUser.token !== ''
                                ? loggedInView
                                : loggedOutView}
                        </Wrapper>
                    </ThemeProvider>
                </Router>
            </Provider>
        </React.Suspense>
    );
};

export default React.memo(MainLayout);
