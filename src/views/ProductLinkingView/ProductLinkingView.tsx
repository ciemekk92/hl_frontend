import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect, ConnectedProps } from 'react-redux';
import { Link, Links } from '../../store/types/types';
import {
    Legend,
    LegendItem,
    LegendLabel,
    LinksTable,
    LinksTCell,
    LinksFirstCell,
    LinksTHeader,
    LinksTRow,
    Wrapper
} from './ProductLinkingView.styled';
import { Heading2 } from '../../components/UI/Typography';

const ProductLinkingView: React.FC<PropsFromRedux> = (props) => {
    const { links } = props;

    interface ISelectedCell {
        column: number | null;
        row: number | null;
    }

    const [selectedCell, setSelectedCell] = useState<ISelectedCell>({
        column: null,
        row: null
    });

    const handleSelectColumn = (index: number) => {
        setSelectedCell({ ...selectedCell, column: index });
    };

    const handleSelectRow = (index: number) => {
        setSelectedCell({ ...selectedCell, row: index });
    };

    return (
        <Wrapper>
            <Heading2>Polecane połączenia produktów</Heading2>
            <Legend>
                <LegendItem fillColor={2} />
                <LegendLabel>Można stosować razem</LegendLabel>
                <LegendItem fillColor={1} />
                <LegendLabel>
                    Można stosować razem z odstępem czasowym
                </LegendLabel>
                <LegendItem fillColor={0} />
                <LegendLabel>Nie można stosować razem</LegendLabel>
            </Legend>
            <LinksTable>
                <colgroup>
                    <col span={1} style={{ width: '8%' }} />
                    {links.map((element) => (
                        <col
                            span={1}
                            style={{ width: `${92 / links.length}%` }}
                            key={element.productName}
                        />
                    ))}
                </colgroup>
                <thead>
                    <LinksTRow>
                        <LinksTHeader> </LinksTHeader>
                        {links
                            .slice()
                            .sort((a, b) => {
                                if (a.productName < b.productName) {
                                    return -1;
                                }
                                if (a.productName > b.productName) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((element: Links, index: number) => (
                                <LinksTHeader
                                    key={element.productName}
                                    onClick={() => handleSelectColumn(index)}
                                    selected={selectedCell.column === index}
                                >
                                    {element.productName.length > 17
                                        ? `${element.productName.substr(
                                              0,
                                              17
                                          )}...`
                                        : element.productName}
                                </LinksTHeader>
                            ))}
                    </LinksTRow>
                </thead>
                <tbody>
                    {links
                        .slice()
                        .sort((a, b) => {
                            if (a.productName < b.productName) {
                                return -1;
                            }
                            if (a.productName > b.productName) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((element: Links, index: number) => (
                            <LinksTRow key={uuidv4()}>
                                <LinksFirstCell
                                    onClick={() => handleSelectRow(index)}
                                    selected={selectedCell.row === index}
                                >
                                    {' '}
                                    {element.productName.length > 17
                                        ? `${element.productName.substr(
                                              0,
                                              17
                                          )}...`
                                        : element.productName}
                                </LinksFirstCell>
                                {element.links.map(
                                    (
                                        innerElement: Link,
                                        innerIndex: number
                                    ) => (
                                        <LinksTCell
                                            selected={
                                                selectedCell.column ===
                                                    innerIndex &&
                                                selectedCell.row === index
                                            }
                                            fillColor={innerElement.canUse}
                                            key={uuidv4()}
                                        >
                                            {' '}
                                        </LinksTCell>
                                    )
                                )}
                            </LinksTRow>
                        ))}
                </tbody>
            </LinksTable>
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        links: Links[];
    };
}) => {
    return {
        links: state.data.links
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(ProductLinkingView));
