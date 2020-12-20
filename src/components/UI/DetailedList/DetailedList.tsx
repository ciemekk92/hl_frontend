import React, { useState } from 'react';
import { DetailedInfo, ProductQuestion } from '../../../store/types/types';
import { Explanation } from '../Typography';
import { CSSTransition } from 'react-transition-group';
import '../../../transitions/transitions.css';
import { v4 as uuidv4 } from 'uuid';
import IconChevronRight from '../Icons/IconChevronRight';
import { IconContainer } from './DetailedList.styled';
import {
    DetailText,
    MainText,
    Row
} from '../../../containers/Product/Dosage/Dosage.styled';
import IconCheckmark from '../Icons/IconCheckmark';

interface ListProps {
    element: DetailedInfo | ProductQuestion;
    sideEffect?: boolean;
    index?: number;
}

const DetailedList: React.FC<ListProps> = (props) => {
    const { element } = props;

    let typedElement =
        'question' in element
            ? { name: element.question, details: element.answer }
            : element;

    const [showDetails, setShowDetails] = useState(false);
    return (
        <React.Fragment>
            <Row>
                <IconCheckmark size={20} title={'Ważne!'} color={'#f5cab2'} />
                <MainText>{typedElement.name}</MainText>
                {typedElement.details.length > 0 ? (
                    <IconContainer
                        toggle={showDetails}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        <IconChevronRight
                            size={24}
                            title={'Dowiedz się więcej'}
                            color={'#f3596b'}
                        />
                    </IconContainer>
                ) : null}
            </Row>
            {typedElement.details.length === 1 ? (
                <CSSTransition
                    in={showDetails}
                    classNames="opacity"
                    timeout={600}
                    mountOnEnter
                    unmountOnExit
                >
                    <DetailText>{typedElement.details}</DetailText>
                </CSSTransition>
            ) : typedElement.details.length > 1 ? (
                <CSSTransition
                    in={showDetails}
                    classNames="opacity"
                    timeout={600}
                    mountOnEnter
                    unmountOnExit
                >
                    <div>
                        {typedElement.details.map((element) => (
                            <DetailText key={uuidv4()}>{element}</DetailText>
                        ))}
                    </div>
                </CSSTransition>
            ) : null}
            {typedElement.explanation && typedElement.explanation.length >= 1
                ? typedElement.explanation.map((element) => (
                      <Explanation key={uuidv4()}>{element}</Explanation>
                  ))
                : null}
        </React.Fragment>
    );
};

export default DetailedList;
