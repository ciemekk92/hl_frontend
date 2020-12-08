import React from 'react';
import { Product } from '../../store/types/types';
import { Wrapper } from './ProductView.styled';
import {
    Heading2,
    Heading3,
    UnorderedList
} from '../../components/UI/Typography';
import DetailedList from '../../components/UI/DetailedList/DetailedList';

interface ProductViewProps {
    product: Product;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
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

export default ProductView;
