import React, { forwardRef } from 'react';
import { Area } from './Modal.styled';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
    open: boolean;
    ref?: React.Ref<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        const { open } = props;

        return (
            <>
                <Backdrop show={open}>
                    <Area ref={ref}>{props.children}</Area>
                </Backdrop>
            </>
        );
    }
);

export default Modal;
