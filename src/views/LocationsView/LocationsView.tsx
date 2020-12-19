import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BranchLocation } from '../../store/types/types';
import {
    CityLabel,
    CityPanel,
    IconContainer,
    PanelRow,
    Wrapper
} from './LocationsView.styled';
import IconChevronRight from '../../components/UI/Icons/IconChevronRight';
import { Heading2 } from '../../components/UI/Typography';
import { CSSTransition } from 'react-transition-group';

interface ContainerProps {
    element: BranchLocation;
}

const CityContainer: React.FC<ContainerProps> = (props) => {
    const { element } = props;
    const [isActive, setIsActive] = useState(false);

    return (
        <CityPanel onClick={() => setIsActive(!isActive)}>
            <PanelRow>
                <CityLabel>{element.name}</CityLabel>
                <IconContainer active={isActive}>
                    <IconChevronRight
                        size={24}
                        title={'Rozwiń'}
                        color={'#f3596b'}
                    />
                </IconContainer>
            </PanelRow>

            {element.locations.map((singleLocation) => (
                <PanelRow key={singleLocation.name}>
                    <CSSTransition
                        in={isActive}
                        timeout={600}
                        classNames={'max-height-small'}
                        unmountOnExit
                    >
                        <div>
                            <p style={{ fontWeight: 700 }}>
                                {singleLocation.name}
                            </p>
                            <p>{singleLocation.address}</p>
                        </div>
                    </CSSTransition>
                </PanelRow>
            ))}
        </CityPanel>
    );
};

const LocationsView: React.FC<PropsFromRedux> = (props) => {
    const { locations } = props;

    return (
        <Wrapper>
            <Heading2>Gdzie nas znaleźć?</Heading2>
            {locations
                .sort((a, b) => {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                })
                .map((element: BranchLocation) => (
                    <CityContainer key={element.name} element={element} />
                ))}
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        locations: BranchLocation[];
    };
}) => {
    return {
        locations: state.data.locations
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(LocationsView));
