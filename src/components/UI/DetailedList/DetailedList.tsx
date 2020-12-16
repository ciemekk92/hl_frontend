import React, { useState } from 'react';
import { DetailedInfo, ProductQuestion } from '../../../store/types/types';
import {
    DetailsItem,
    ListItem,
    ToggleDetails,
    Explanation
} from '../Typography';
import { CSSTransition } from 'react-transition-group';
import '../../../transitions/transitions.css';
import { v4 as uuidv4 } from 'uuid';
import IconChevronRight from '../Icons/IconChevronRight';
import { IconContainer } from './DetailedList.styled';

interface ListProps {
    element: DetailedInfo | ProductQuestion;
    sideEffect?: boolean;
    index?: number;
}

const DetailedList: React.FC<ListProps> = (props) => {
    const { element, sideEffect } = props;

    let typedElement =
        'question' in element
            ? { name: element.question, details: element.answer }
            : element;

    const [showDetails, setShowDetails] = useState(false);
    return (
        <React.Fragment>
            <ListItem>
                {typedElement.name}
                {typedElement.details.length > 0 ? (
                    <IconContainer
                        toggle={showDetails}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        <IconChevronRight
                            size={18}
                            title={'Dowiedz się więcej'}
                            color={'#f8bd0d'}
                        />
                    </IconContainer>
                ) : null}
            </ListItem>
            {typedElement.details.length === 1 ? (
                <CSSTransition
                    in={showDetails}
                    classNames="opacity"
                    timeout={600}
                    mountOnEnter
                    unmountOnExit
                >
                    <DetailsItem>{typedElement.details}</DetailsItem>
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
                            <DetailsItem key={uuidv4()}>{element}</DetailsItem>
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
