import React from 'react';
import { Ingredient } from '../../../store/types/types';
import {
    Table,
    TCell,
    THeader,
    TRow
} from '../../../components/UI/Product/Table/ProductTable.styled';
import { Heading2, Heading3 } from '../../../components/UI/Typography';
import { Wrapper } from '../../../views/ProductView/ProductView.styled';
import { ProductProps } from '../../../types';

export const Ingredients: React.FC<ProductProps> = (props) => {
    const { product } = props;

    const ingredientsMapHandler = () => {
        return product.ingredients
            .sort((a: Ingredient, b: Ingredient) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                }
                return 0;
            })
            .map((element: Ingredient) => (
                <TRow key={element.name}>
                    <TCell>{element.name}</TCell>
                    <TCell>{`${element.amount} ${element.unit}`}</TCell>
                    <TCell>{element.percentage}</TCell>
                </TRow>
            ));
    };
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
                <tbody>{ingredientsMapHandler()}</tbody>
            </Table>
        </Wrapper>
    );
};
