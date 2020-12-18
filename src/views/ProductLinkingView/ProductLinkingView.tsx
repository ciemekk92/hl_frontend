import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect, ConnectedProps } from 'react-redux';
import { Link, Links } from '../../store/types/types';
import {
    Legend,
    LegendItem,
    LegendLabel,
    LinksTable,
    LinksTCell,
    LinksTHeader,
    LinksTRow,
    Wrapper
} from './ProductLinkingView.styled';
import { Heading2 } from '../../components/UI/Typography';

const ProductLinkingView: React.FC<PropsFromRedux> = (props) => {
    const { links } = props;

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
                        {links.map((element: Links) => (
                            <LinksTHeader key={element.productName}>
                                {element.productName.length > 15
                                    ? `${element.productName.substr(0, 15)}...`
                                    : element.productName}
                            </LinksTHeader>
                        ))}
                    </LinksTRow>
                </thead>
                <tbody>
                    {links.map((element) => (
                        <LinksTRow key={uuidv4()}>
                            <LinksTCell>
                                {' '}
                                {element.productName.length > 15
                                    ? `${element.productName.substr(0, 15)}...`
                                    : element.productName}
                            </LinksTCell>
                            {element.links.map((innerElement: Link) => (
                                <LinksTCell
                                    fillColor={innerElement.canUse}
                                    key={uuidv4()}
                                >
                                    {' '}
                                </LinksTCell>
                            ))}
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
