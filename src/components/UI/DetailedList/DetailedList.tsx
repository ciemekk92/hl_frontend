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

interface ListProps {
    element: DetailedInfo | ProductQuestion;
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
            <ListItem>
                {typedElement.name}{' '}
                {typedElement.details.length > 0 ? (
                    <ToggleDetails onClick={() => setShowDetails(!showDetails)}>
                        Dlaczego?
                    </ToggleDetails>
                ) : null}
            </ListItem>
            <CSSTransition
                in={showDetails}
                classNames="opacity"
                timeout={400}
                mountOnEnter
                unmountOnExit
            >
                <DetailsItem>{typedElement.details}</DetailsItem>
            </CSSTransition>
            {typedElement.explanation && typedElement.explanation.length > 0 ? (
                <Explanation>{typedElement.explanation}</Explanation>
            ) : null}
        </React.Fragment>
    );
};

export default DetailedList;
