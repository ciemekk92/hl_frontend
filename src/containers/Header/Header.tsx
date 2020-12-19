import React, { useContext, useState } from 'react';
import { Wrapper, ButtonsContainer, LogoContainer } from './Header.styled';
import LogoLarge from '../../components/UI/LogoLarge/LogoLarge';
import IconUser from '../../components/UI/Icons/IconUser';
import HeaderButton from '../../components/Header/HeaderButton/HeaderButton';
import Dropdown from '../../components/Header/Dropdown/Dropdown';
import { CSSTransition } from 'react-transition-group';
import '../../transitions/transitions.css';
import { authService } from '../../services';
import { modalContext } from '../../context/modalContext';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const logoutHandler = async () => {
        await authService.logout();
    };
    const { handleModalOpen } = useContext(modalContext);

    return (
        <Wrapper>
            <LogoContainer>
                <LogoLarge color={'#000'} title={'Logo'} size={32} />
            </LogoContainer>
            <ButtonsContainer>
                <HeaderButton
                    icon={<IconUser size={32} title={'User'} color={'#666'} />}
                    clicked={() => {
                        setShowMenu(!showMenu);
                    }}
                />
                <CSSTransition
                    in={showMenu}
                    timeout={600}
                    classNames={'opacity'}
                    mountOnEnter
                    unmountOnExit
                >
                    <Dropdown
                        clicked={() => {
                            setShowMenu(!showMenu);
                        }}
                        logout={logoutHandler}
                        passwordChanged={handleModalOpen}
                    />
                </CSSTransition>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default Header;
