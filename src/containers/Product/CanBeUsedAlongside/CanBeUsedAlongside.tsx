import React from 'react';
import { ProductProps } from '../../../types';
import {
    Heading2,
    Heading3,
    UnorderedList
} from '../../../components/UI/Typography';
import DetailedList from '../../../components/UI/DetailedList/DetailedList';
import { Wrapper } from '../../../views/ProductView/ProductView.styled';

export const CanBeUsedAlongside: React.FC<ProductProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Polecane połączenia</Heading3>
            <UnorderedList>
                {product.canBeUsedAlongside.map((element) => (
                    <DetailedList key={element.name} element={element} />
                ))}
            </UnorderedList>
        </Wrapper>
    );
};
