import React from 'react';
import { ProductProps } from '../../../types';
import {
    Heading2,
    Heading3,
    UnorderedList
} from '../../../components/UI/Typography';
import DetailedList from '../../../components/UI/DetailedList/DetailedList';
import { Wrapper } from '../Shared.styled';
import { v4 as uuidv4 } from 'uuid';

export const Storage: React.FC<ProductProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Przechowywanie</Heading3>
            <UnorderedList>
                {product.storage.map((element) => (
                    <DetailedList key={uuidv4()} element={element} />
                ))}
            </UnorderedList>
        </Wrapper>
    );
};
