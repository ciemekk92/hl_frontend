import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, LoginContainer, Row, Text, Warning } from './Login.styled';
import { CSSTransition } from 'react-transition-group';
import { updateObject } from '../../shared/utility';
import '../../transitions/transitions.css';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';
import LoginButton from '../../components/UI/Login/LoginButton/LoginButton';

interface LoginProps {
    clickedCancel: () => void;
    isLogin?: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
    const { clickedCancel, isLogin } = props;

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [signupData, setSignupData] = useState({
        name: '',
        email: ''
    });

    const [warning, setWarning] = useState({
        shown: false,
        message: ''
    });

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

    const login = (
        <>
            <Row>
                <Text>Zaloguj się, aby uzyskać dostęp do aplikacji.</Text>
            </Row>
            <Row>
                <LoginInput
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
                <LoginInput
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
                <LoginInput
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
                <LoginInput
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

    return (
        <Wrapper>
            <LoginContainer>
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
                    <LoginButton clicked={isLogin ? () => {} : () => {}}>
                        {isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
                    </LoginButton>
                    <LoginButton clicked={clickedCancel}>Anuluj</LoginButton>
                </Row>
            </LoginContainer>
        </Wrapper>
    );
};

export default Login;