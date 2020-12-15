import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
    Wrapper,
    ModalContainer,
    Row,
    Text,
    Warning
} from '../../components/UI/Modal/Modal.styled';
import { CSSTransition } from 'react-transition-group';
import { updateObject } from '../../shared/utility';
import '../../transitions/transitions.css';
import ModalInput from '../../components/UI/Modal/ModalInput/ModalInput';
import ModalButton from '../../components/UI/Modal/ModalButton/ModalButton';
import { authService } from '../../services';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface LoginProps {
    clickedCancel: () => void;
    isLogin?: boolean;
    opened: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
    const { clickedCancel, isLogin, opened } = props;

    const initialLoginData = useMemo(() => {
        return { email: '', password: '' };
    }, []);

    const initialSignupData = useMemo(() => {
        return { name: '', email: '' };
    }, []);

    const [loginData, setLoginData] = useState(initialLoginData);
    const [signupData, setSignupData] = useState(initialSignupData);

    const [warning, setWarning] = useState({
        shown: false,
        message: ''
    });
    const [success, setSuccess] = useState({
        shown: false,
        message: ''
    });

    useEffect(() => {
        if (isLogin && opened) {
            setLoginData(initialLoginData);
        } else if (!isLogin && opened) {
            setSignupData(initialSignupData);
        }
    }, [initialLoginData, initialSignupData, isLogin, opened]);

    const validateEmail = (email: string) => {
        const pattern = /\S+@\S+\.\S+/;
        return pattern.test(email.toLowerCase());
    };

    const inputChangedHandler = (event: React.ChangeEvent, login?: boolean) => {
        const target = event.target as HTMLInputElement;
        const updatedData = updateObject(login ? loginData : signupData, {
            [target.name]: target.value
        });

        if (target.name === 'email') {
            if (!validateEmail(target.value)) {
                if (!warning.shown) {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message: 'Podaj prawidłowy adres email.'
                        })
                    );
                }
            } else {
                setWarning(
                    updateObject(warning, { shown: false, message: '' })
                );
            }
        }

        login ? setLoginData(updatedData) : setSignupData(updatedData);
    };

    const loginHandler = async () => {
        if (!warning.shown) {
            await authService
                .login(loginData.email, loginData.password)
                .then((response) => {
                    console.log(response);
                    clickedCancel();
                })
                .catch((err) => console.log(err));
        }
    };

    const signupHandler = async () => {
        if (!warning.shown) {
            await authService
                .signUp(signupData.name, signupData.email)
                .then(() => {
                    clickedCancel();
                })
                .catch((err) => {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message:
                                'Wystąpił błąd przy rejestracji. Spróbuj ponownie, a jeżeli błąd się powtarza skontaktuj się z administratorem.'
                        })
                    );
                    console.log(err);
                });
        }
    };

    const modalRef = useRef(null);

    useOutsideClick(modalRef, () => clickedCancel());

    const login = (
        <>
            <Row>
                <Text>Zaloguj się, aby uzyskać dostęp do aplikacji.</Text>
            </Row>
            <Row>
                <ModalInput
                    name="email"
                    type="email"
                    placeholder="Adres e-mail"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event, true)
                    }
                    value={loginData.email}
                />
            </Row>
            <Row>
                <ModalInput
                    name="password"
                    type="password"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event, true)
                    }
                    value={loginData.password}
                    placeholder="Hasło"
                />
            </Row>
        </>
    );

    const signup = (
        <>
            <Row>
                <Text>Utwórz konto podając odpowiednie dane poniżej.</Text>
            </Row>
            <Row>
                <ModalInput
                    name="name"
                    type="text"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.name}
                    placeholder="Imię i nazwisko"
                />
            </Row>
            <Row>
                <ModalInput
                    name="email"
                    type="email"
                    changed={(event: React.ChangeEvent) =>
                        inputChangedHandler(event)
                    }
                    value={signupData.email}
                    placeholder="Adres e-mail"
                />
            </Row>
        </>
    );

    const nodeRef = useRef(null);

    // TODO Signup

    return (
        <Wrapper>
            <ModalContainer>
                <CSSTransition
                    nodeRef={nodeRef}
                    in={warning.shown}
                    classNames="opacity"
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                >
                    <Warning ref={nodeRef}>{warning.message}</Warning>
                </CSSTransition>
                {isLogin ? login : signup}
                <Row>
                    <ModalButton
                        clicked={isLogin ? loginHandler : signupHandler}
                    >
                        {isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
                    </ModalButton>
                    <ModalButton clicked={clickedCancel}>Anuluj</ModalButton>
                </Row>
            </ModalContainer>
        </Wrapper>
    );
};

export default React.memo(Login);
