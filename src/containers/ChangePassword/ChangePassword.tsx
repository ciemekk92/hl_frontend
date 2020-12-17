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
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface ChangeProps {
    clickedCancel: () => void;
    openModal: boolean;
}

const ChangePassword: React.FC<ChangeProps> = (props) => {
    const { clickedCancel, openModal } = props;

    const initialData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    };

    const [passwordData, setPasswordData] = useState(initialData);
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

    const inputClearHandler = () => {
        clickedCancel();
        setPasswordData(initialData);
        setWarning(updateObject(warning, { shown: false }));
    };

    const passwordChangeHandler = () => {
        authService
            .changePassword(passwordData)
            .then(() => {
                inputClearHandler();
            })
            .catch((err) =>
                err.message.includes(401)
                    ? setWarning(
                          updateObject(warning, {
                              shown: true,
                              message: 'Obecne hasło jest nieprawidłowe'
                          })
                      )
                    : err.message.includes(500)
                    ? setWarning(
                          updateObject(warning, {
                              shown: true,
                              message: 'Podane hasła nie są identyczne.'
                          })
                      )
                    : setWarning(
                          updateObject(warning, {
                              shown: true,
                              message:
                                  'Wystąpił nieoczekiwany błąd. Spróbuj ponownie, jeżeli błąd będzie się powtarzał, skontaktuj się z administratorem serwisu.'
                          })
                      )
            );
    };

    const nodeRef = useRef(null);
    const modalRef = useRef(null);

    useOutsideClick(modalRef, () => {
        if (openModal) {
            inputClearHandler();
        }
    });

    return (
        <Wrapper ref={modalRef}>
            <ModalContainer>
                <Row>
                    <Text>
                        Podaj obecne hasło, a następnie podaj nowe i je
                        potwierdź.
                    </Text>
                </Row>
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
                    <ModalButton clicked={() => passwordChangeHandler()}>
                        Zatwierdź
                    </ModalButton>
                    <ModalButton clicked={inputClearHandler}>
                        Anuluj
                    </ModalButton>
                </Row>
            </ModalContainer>
        </Wrapper>
    );
};

export default React.memo(ChangePassword);
