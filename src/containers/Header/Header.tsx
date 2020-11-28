import React from 'react';
import { Wrapper, ButtonsContainer, LogoContainer } from './Header.styled';
import LogoLarge from '../../components/UI/LogoLarge/LogoLarge';
import IconUser from '../../components/UI/Icons/IconUser';
import HeaderButton from '../../components/Header/HeaderButton/HeaderButton';

const Header: React.FC = (props) => {
    return (
        <Wrapper>
            <LogoContainer>
                <LogoLarge color={'#000'} title={'Logo'} size={32} />
            </LogoContainer>
            <ButtonsContainer>
                <HeaderButton
                    icon={<IconUser size={32} title={'User'} color={'#000'} />}
                    clicked={() => {}}
                />
            </ButtonsContainer>
        </Wrapper>
    );
};

export default Header;
