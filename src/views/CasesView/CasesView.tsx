import React, { useState } from 'react';
import { Case } from '../../store/types/types';
import { connect, ConnectedProps } from 'react-redux';
import { CaseLabel, CasePanel } from './CasesView.styled';
import {
    IconContainer,
    PanelRow,
    Wrapper
} from '../LocationsView/LocationsView.styled';
import IconChevronRight from '../../components/UI/Icons/IconChevronRight';
import { CSSTransition } from 'react-transition-group';
import { Heading2 } from '../../components/UI/Typography';
import { v4 as uuidv4 } from 'uuid';

interface CasesProps {
    element: Case;
}

const CasesContainer: React.FC<CasesProps> = (props) => {
    const { element } = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <CasePanel onClick={() => setIsActive(!isActive)}>
            <PanelRow>
                <CaseLabel>{element.name}</CaseLabel>
                <IconContainer active={isActive}>
                    <IconChevronRight
                        size={24}
                        title={'Rozwiń'}
                        color={'#f3596b'}
                    />
                </IconContainer>
            </PanelRow>
            <PanelRow>
                <CSSTransition
                    in={isActive}
                    timeout={600}
                    classNames={'max-height-medium'}
                    unmountOnExit
                >
                    <div>
                        {element.products.map((product) => (
                            <p key={product.substr(0, 6)}>{product}</p>
                        ))}
                    </div>
                </CSSTransition>
            </PanelRow>
        </CasePanel>
    );
};

const CasesView: React.FC<PropsFromRedux> = (props) => {
    const { cases } = props;

    return (
        <Wrapper>
            <Heading2>Pytania i odpowiedzi</Heading2>
            {cases.map((element: Case) => (
                <CasesContainer element={element} key={uuidv4()} />
            ))}
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        cases: Case[];
    };
}) => {
    return {
        cases: state.data.cases
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(CasesView));
