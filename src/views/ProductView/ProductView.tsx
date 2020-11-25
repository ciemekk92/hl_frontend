import React from 'react';
import { Ingredient, Product } from '../../store/types/types';
import { Wrapper } from './ProductView.styled';
import {
    Heading2,
    Heading3,
    UnorderedList
} from '../../components/UI/Typography';
import {
    Table,
    THeader,
    TRow,
    TCell
} from '../../components/UI/Product/Table/ProductTable.styled';
import DetailedList from '../../components/UI/DetailedList/DetailedList';

interface ProductViewProps {
    product: Product;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Składniki:</Heading3>
            <Table>
                <colgroup>
                    <col span={1} style={{ width: '70%' }} />
                    <col span={1} style={{ width: '15%' }} />
                    <col span={1} style={{ width: '15%' }} />
                </colgroup>
                <thead>
                    <TRow>
                        <THeader>Składnik</THeader>
                        <THeader>Ilość</THeader>
                        <THeader>% RWS</THeader>
                    </TRow>
                </thead>
                <tbody>
                    {product.ingredients.map((element: Ingredient) => (
                        <TRow key={element.name}>
                            <TCell>{element.name}</TCell>
                            <TCell>{`${element.amount} ${element.unit}`}</TCell>
                            <TCell>{element.percentage}</TCell>
                        </TRow>
                    ))}
                </tbody>
            </Table>
            <Heading3>Stosowanie</Heading3>
            <UnorderedList>
                {product.dosage.map((element, index) =>
                    index === 0 && element.details.length === 0 ? (
                        <p>{element.name}</p>
                    ) : (
                        <DetailedList key={element.name} element={element} />
                    )
                )}
            </UnorderedList>
            <Heading3>Skutki uboczne</Heading3>
            <UnorderedList>
                {product.sideEffects.map((element) => (
                    <DetailedList key={element.name} element={element} />
                ))}
            </UnorderedList>
            <Heading3>Dla kogo polecamy?</Heading3>
            <UnorderedList>
                {product.recommendedFor.map((element) => (
                    <DetailedList key={element.name} element={element} />
                ))}
            </UnorderedList>
            <Heading3>Dla kogo nie polecamy?</Heading3>
            <UnorderedList>
                {product.notRecommendedFor.map((element) => (
                    <DetailedList key={element.name} element={element} />
                ))}
            </UnorderedList>
            <Heading3>Polecane połączenia</Heading3>
            <UnorderedList>
                {product.canBeUsedAlongside.map((element) => (
                    <DetailedList key={element.name} element={element} />
                ))}
            </UnorderedList>
            <Heading3>Trudne pytania</Heading3>
            <UnorderedList>
                {product.questions.map((element) => (
                    <DetailedList key={element.question} element={element} />
                ))}
            </UnorderedList>
        </Wrapper>
    );
};

export default ProductView;
