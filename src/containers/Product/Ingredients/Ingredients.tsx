import React from 'react';
import { Ingredient, IngredientsInterface } from '../../../store/types/types';
import {
    Table,
    TCell,
    THeader,
    TRow
} from '../../../components/UI/Product/Table/ProductTable.styled';
import { Heading2, Heading3 } from '../../../components/UI/Typography';
import { Wrapper } from '../Shared.styled';
import { ProductProps } from '../../../types';

export const Ingredients: React.FC<ProductProps> = (props) => {
    const { product } = props;

    const ingredientsMapHandler = (type: string) => {
        return product.ingredients[
            type as keyof IngredientsInterface
        ]!.ingredients.map((element: Ingredient) => (
            <TRow key={element.name}>
                <TCell>{element.name}</TCell>
                <TCell>{`${element.amount ? element.amount : ''} ${
                    element.unit ? element.unit : ''
                }`}</TCell>
                <TCell>{element.percentage}</TCell>
            </TRow>
        ));
    };

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>
                {!product.ingredients.night
                    ? 'Składniki:'
                    : product.ingredients.day.name}
            </Heading3>
            <Table>
                <colgroup>
                    <col span={1} style={{ width: '60%' }} />
                    <col span={1} style={{ width: '20%' }} />
                    <col span={1} style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <TRow>
                        <THeader>Składnik</THeader>
                        <THeader>{product.ingredients.day.dose}</THeader>
                        <THeader>RWS [%]</THeader>
                    </TRow>
                </thead>
                <tbody>{ingredientsMapHandler('day')}</tbody>
            </Table>
            {product.ingredients.night.ingredients.length > 0 ? (
                <>
                    <Heading3>{product.ingredients.night.name}</Heading3>
                    <Table>
                        <colgroup>
                            <col span={1} style={{ width: '60%' }} />
                            <col span={1} style={{ width: '20%' }} />
                            <col span={1} style={{ width: '20%' }} />
                        </colgroup>
                        <thead>
                            <TRow>
                                <THeader>Składnik</THeader>
                                <THeader>
                                    {product.ingredients.night.dose}
                                </THeader>
                                <THeader>RWS [%]</THeader>
                            </TRow>
                        </thead>
                        <tbody>{ingredientsMapHandler('night')}</tbody>
                    </Table>
                </>
            ) : null}
        </Wrapper>
    );
};
