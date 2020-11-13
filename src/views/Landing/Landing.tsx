import React from 'react';
import { LoginButton, LoginButtonsContainer, Wrapper } from './Landing.styled';
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
                <LoginButton onClick={() => toggleLogin(true)}>
                    Logowanie
                </LoginButton>
                <LoginButton onClick={() => toggleLogin(false)}>
                    Rejestracja
                </LoginButton>
            </LoginButtonsContainer>
        </Wrapper>
    );
};

export default Landing;
