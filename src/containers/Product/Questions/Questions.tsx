import React from 'react';
import { ProductProps } from '../../../types';
import { Heading2, Heading3 } from '../../../components/UI/Typography';
import DetailedList from '../../../components/UI/DetailedList/DetailedList';
import { Wrapper } from '../Shared.styled';

export const Questions: React.FC<ProductProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Trudne pytania</Heading3>

            {product.questions.map((element) => (
                <DetailedList key={element.question} element={element} />
            ))}
        </Wrapper>
    );
};
