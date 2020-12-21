import React, { useState } from 'react';
import { ProductProps } from '../../../types';
import { Heading2, Heading3 } from '../../../components/UI/Typography';
import { v4 as uuidv4 } from 'uuid';
import { Wrapper } from '../Shared.styled';
import { DetailedInfo } from '../../../store/types/types';
import {
    DetailText,
    DosageIconContainer,
    MainText,
    Row,
    Explanation
} from './Dosage.styled';
import IconCheckmark from '../../../components/UI/Icons/IconCheckmark';
import IconChevronRight from '../../../components/UI/Icons/IconChevronRight';
import { CSSTransition } from 'react-transition-group';

interface DosageProps {
    element: DetailedInfo;
    index: number;
    max: number;
    productName: string;
}

const DetailedDosage: React.FC<DosageProps> = (props) => {
    const { element, index, max, productName } = props;
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            <React.Fragment>
                <Row>
                    {index === 0 ||
                    index === max - 1 ||
                    (index === max - 2 &&
                        !productName.includes('Vitamin C')) ? (
                        <IconCheckmark
                            size={20}
                            title={'Ważne!'}
                            color={'#f5cab2'}
                        />
                    ) : null}
                    <MainText
                        style={{
                            marginLeft: !(
                                index === 0 ||
                                index === max - 1 ||
                                (index === max - 2 &&
                                    !productName.includes('Vitamin C'))
                            )
                                ? '3.5rem'
                                : '1rem'
                        }}
                    >
                        {element.name}
                    </MainText>
                    {element.details.length > 0 ? (
                        <DosageIconContainer
                            toggle={showDetails}
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            <IconChevronRight
                                size={24}
                                title={'Dowiedz się więcej'}
                                color={'#f3596b'}
                            />
                        </DosageIconContainer>
                    ) : null}
                </Row>
                {element.details.length === 1 ? (
                    <CSSTransition
                        in={showDetails}
                        classNames="opacity"
                        timeout={600}
                        mountOnEnter
                        unmountOnExit
                    >
                        <DetailText>{element.details}</DetailText>
                    </CSSTransition>
                ) : element.details.length > 1 ? (
                    <CSSTransition
                        in={showDetails}
                        classNames="opacity"
                        timeout={600}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div style={{ marginBottom: '1rem' }}>
                            {element.details.map((innerElement) => (
                                <DetailText key={uuidv4()}>
                                    {innerElement}
                                </DetailText>
                            ))}
                        </div>
                    </CSSTransition>
                ) : null}
                {element.explanation && element.explanation.length >= 1
                    ? element.explanation.map((explanation) => (
                          <Explanation key={uuidv4()}>
                              {explanation}
                          </Explanation>
                      ))
                    : null}
            </React.Fragment>
        </>
    );
};

export const Dosage: React.FC<ProductProps> = (props) => {
    const { product } = props;

    return (
        <Wrapper>
            <Heading2>{product.name}</Heading2>
            <Heading3>Stosowanie</Heading3>
            {product.dosage.map((element, index) => {
                return (
                    <DetailedDosage
                        key={element.name}
                        element={element}
                        productName={product.name}
                        index={index}
                        max={product.dosage.length}
                    />
                );
            })}
        </Wrapper>
    );
};
