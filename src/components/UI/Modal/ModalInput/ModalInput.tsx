import React from 'react';
import { Input } from './ModalInput.styled';
import { capitalizeFirstLetter } from '../../../../shared/utility';

interface InputProps {
    name: string;
    type: string;
    changed: (event: React.ChangeEvent) => void;
    value: string;
    placeholder: string;
}

const ModalInput: React.FC<InputProps> = (props) => {
    const { name, type, changed, value, placeholder } = props;

    return (
        <Input
            name={name}
            onChange={(event: React.ChangeEvent) => changed(event)}
            value={value}
            type={type}
            placeholder={capitalizeFirstLetter(placeholder)}
            required
        />
    );
};

export default ModalInput;
