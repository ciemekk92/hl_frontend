import React, { useRef, useState } from 'react';
import {
    Wrapper,
    Row,
    Text,
    ModalContainer,
    Warning
} from '../../components/UI/Modal/Modal.styled';
import { CSSTransition } from 'react-transition-group';
import ModalInput from '../../components/UI/Modal/ModalInput/ModalInput';
import { updateObject } from '../../shared/utility';
import ModalButton from '../../components/UI/Modal/ModalButton/ModalButton';
import { authService } from '../../services';

interface ChangeProps {
    clickedCancel: () => void;
}

const ChangePassword: React.FC<ChangeProps> = (props) => {
    const { clickedCancel } = props;

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [warning, setWarning] = useState({
        shown: false,
        message: ''
    });

    const inputChangedHandler = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const updatedData = updateObject(passwordData, {
            [target.name]: target.value
        });
        if (target.name === 'confirmPassword') {
            if (target.value !== passwordData.newPassword) {
                if (!warning.shown) {
                    setWarning(
                        updateObject(warning, {
                            shown: true,
                            message: 'Podane hasła nie są identyczne.'
                        })
                    );
                }
            } else {
                setWarning(
                    updateObject(warning, { shown: false, message: '' })
                );
            }
        }
        setPasswordData(updatedData);
    };

    const nodeRef = useRef(null);

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
                <Row>
                    <Text>
                        Podaj obecne hasło, a następnie podaj nowe i je
                        potwierdź.
                    </Text>
                </Row>
                <Row>
                    <ModalInput
                        name="currentPassword"
                        type="password"
                        placeholder="Obecne hasło"
                        changed={(event: React.ChangeEvent) =>
                            inputChangedHandler(event)
                        }
                        value={passwordData.currentPassword}
                    />
                </Row>
                <Row>
                    <ModalInput
                        name="newPassword"
                        type="password"
                        placeholder="Nowe hasło"
                        changed={(event: React.ChangeEvent) =>
                            inputChangedHandler(event)
                        }
                        value={passwordData.newPassword}
                    />
                </Row>
                <Row>
                    <ModalInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Potwierdź hasło"
                        changed={(event: React.ChangeEvent) =>
                            inputChangedHandler(event)
                        }
                        value={passwordData.confirmPassword}
                    />
                </Row>
                <Row>
                    <ModalButton
                        clicked={() => authService.changePassword(passwordData)}
                    >
                        Zatwierdź
                    </ModalButton>
                    <ModalButton clicked={clickedCancel}>Anuluj</ModalButton>
                </Row>
            </ModalContainer>
        </Wrapper>
    );
};

export default ChangePassword;
