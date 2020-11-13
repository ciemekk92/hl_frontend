import React from 'react';
import { Wrapper, ButtonsContainer, LogoContainer } from './Header.styled';
import LogoSmall from '../../components/UI/LogoSmall/LogoSmall';
import LogoLarge from '../../components/UI/LogoLarge/LogoLarge';

const Header: React.FC = (props) => {
    return (
        <Wrapper>
            <LogoContainer>
                <LogoLarge color={'#000'} title={'Logo'} size={32} />
            </LogoContainer>
            <ButtonsContainer>Buttons go here</ButtonsContainer>
        </Wrapper>
    );
};

export default Header;
