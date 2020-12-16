import React from 'react';
import { ProductProps } from '../../../types';
import {
    Heading2,
    Heading3,
    UnorderedList
} from '../../../components/UI/Typography';
import { v4 as uuidv4 } from 'uuid';
import DetailedList from '../../../components/UI/DetailedList/DetailedList';
import { Wrapper } from '../Shared.styled';

export const Dosage: React.FC<ProductProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Stosowanie</Heading3>
            <UnorderedList>
                {product.dosage.map((element, index) =>
                    index === 0 && element.details.length === 0 ? (
                        <p key={uuidv4()}>{element.name}</p>
                    ) : (
                        <DetailedList
                            key={element.name}
                            index={index}
                            element={element}
                        />
                    )
                )}
            </UnorderedList>
        </Wrapper>
    );
};
