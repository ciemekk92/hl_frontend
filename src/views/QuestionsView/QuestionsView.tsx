import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect, ConnectedProps } from 'react-redux';
import { Question } from '../../store/types/types';
import { Heading2 } from '../../components/UI/Typography';
import {
    IconContainer,
    PanelRow,
    Wrapper
} from '../LocationsView/LocationsView.styled';
import {
    AnswerText,
    QuestionLabel,
    QuestionPanel
} from './QuestionsView.styled';
import IconChevronRight from '../../components/UI/Icons/IconChevronRight';
import { CSSTransition } from 'react-transition-group';

interface QuestionsProps {
    element: Question;
}

const QuestionsContainer: React.FC<QuestionsProps> = (props) => {
    const { element } = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <QuestionPanel onClick={() => setIsActive(!isActive)}>
            <PanelRow>
                <QuestionLabel>
                    {element.question.replace('&#x2F;', '/')}
                </QuestionLabel>
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
                        {element.answers.map((answer) => (
                            <AnswerText key={answer.substr(0, 6)}>
                                {answer}
                            </AnswerText>
                        ))}
                    </div>
                </CSSTransition>
            </PanelRow>
        </QuestionPanel>
    );
};

const QuestionsView: React.FC<PropsFromRedux> = (props) => {
    const { questions } = props;

    return (
        <Wrapper>
            <Heading2>Pytania i odpowiedzi</Heading2>
            {questions.map((element: Question) => (
                <QuestionsContainer element={element} key={uuidv4()} />
            ))}
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        questions: Question[];
    };
}) => {
    return {
        questions: state.data.questions
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(QuestionsView));
