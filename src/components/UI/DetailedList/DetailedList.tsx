import React, { useState } from 'react';
import { DetailedInfo, ProductQuestion } from '../../../store/types/types';
import { DetailsItem, ListItem, ToggleDetails } from '../Typography';
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
                {typedElement.details ? (
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
        </React.Fragment>
    );
};

export default DetailedList;
