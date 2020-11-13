import React from 'react';
import {
    LandingLoginButton,
    LoginButtonsContainer,
    Wrapper
} from './Landing.styled';
import LogoLarge from '../../components/UI/LogoLarge/LogoLarge';

interface LandingProps {
    toggleLogin: (isLogin: boolean) => void;
}

const Landing: React.FC<LandingProps> = (props) => {
    const { toggleLogin } = props;
    return (
        <Wrapper>
            <LogoLarge
                size={64}
                title={''}
                color={'#000'}
                style={{ margin: '2rem 0 15rem' }}
            />
            <LoginButtonsContainer>
                <LandingLoginButton onClick={() => toggleLogin(true)}>
                    Logowanie
                </LandingLoginButton>
                <LandingLoginButton onClick={() => toggleLogin(false)}>
                    Rejestracja
                </LandingLoginButton>
            </LoginButtonsContainer>
        </Wrapper>
    );
};

export default Landing;
