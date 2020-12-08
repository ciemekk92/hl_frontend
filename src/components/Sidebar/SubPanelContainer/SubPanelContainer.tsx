import React from 'react';
import { SubContainer } from './SubPanelContainer.styled';
import '../../../transitions/transitions.css';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

interface SubPanelProps {
    active: boolean;
    children: React.ReactElement<any>[];
}

const SubPanelContainer: React.FC<SubPanelProps> = (props) => {
    const { active } = props;
    return (
        <CSSTransition
            in={active}
            timeout={600}
            classNames={'opacity'}
            unmountOnExit
            key={uuidv4()}
        >
            <SubContainer>{props.children}</SubContainer>
        </CSSTransition>
    );
};

export default React.memo(SubPanelContainer);
