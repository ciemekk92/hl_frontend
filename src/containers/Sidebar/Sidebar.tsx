import React, { useState } from 'react';
import { Wrapper } from './Sidebar.styled';
import { connect, ConnectedProps } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import '../../transitions/transitions.css';
import {
    BranchLocation,
    Case,
    Product,
    Question
} from '../../store/types/types';
import SidebarPanel from '../../components/Sidebar/SidebarPanel/SidebarPanel';
import SidebarCategoryPanel from '../../components/Sidebar/SidebarCategoryPanel/SidebarCategoryPanel';
import PanelContainer from '../../components/Sidebar/PanelContainer/PanelContainer';
import { dataService } from '../../services/dataService';

const Sidebar: React.FC<PropsFromRedux> = (props) => {
    const { products, cases, questions, locations } = props;

    const [areProductsShown, setAreProductsShown] = useState(false);
    const [areCasesShown, setAreCasesShown] = useState(false);
    const [areQuestionsShown, setAreQuestionsShown] = useState(false);
    const [areLocationsShown, setAreLocationsShown] = useState(false);

    const productMapHandler = products.map((element: Product) => (
        <SidebarPanel key={uuidv4()}>{element.name}</SidebarPanel>
    ));

    const productLoadHandler = async () => {
        if (products.length === 0) {
            await dataService
                .getAllProducts()
                .then(() => setAreProductsShown(!areProductsShown));
        } else {
            setAreProductsShown(!areProductsShown);
        }
    };

    const casesLoadHandler = async () => {
        if (cases.length === 0) {
            await dataService
                .getAllCases()
                .then(() => setAreCasesShown(!areCasesShown));
        } else {
            setAreCasesShown(!areCasesShown);
        }
    };

    const questionsLoadHandler = async () => {
        if (questions.length === 0) {
            await dataService
                .getAllQuestions()
                .then(() => setAreQuestionsShown(!areQuestionsShown));
        } else {
            setAreQuestionsShown(!areQuestionsShown);
        }
    };

    const locationsLoadHandler = async () => {
        if (locations.length === 0) {
            await dataService
                .getAllLocations()
                .then(() => setAreLocationsShown(!areLocationsShown));
        } else {
            setAreLocationsShown(!areLocationsShown);
        }
    };

    return (
        <Wrapper>
            <SidebarCategoryPanel clicked={productLoadHandler}>
                Produkty
            </SidebarCategoryPanel>
            <CSSTransition
                in={areProductsShown}
                timeout={400}
                classNames={'sidebar-panel'}
                mountOnEnter
                unmountOnExit
            >
                <PanelContainer>{productMapHandler}</PanelContainer>
            </CSSTransition>
            <SidebarCategoryPanel clicked={casesLoadHandler}>
                Choroby
            </SidebarCategoryPanel>
            <SidebarCategoryPanel clicked={questionsLoadHandler}>
                Trudne pytania
            </SidebarCategoryPanel>
            <SidebarCategoryPanel clicked={locationsLoadHandler}>
                Gdzie nas znaleźć
            </SidebarCategoryPanel>
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        products: Product[];
        cases: Case[];
        questions: Question[];
        locations: BranchLocation[];
    };
}) => {
    return {
        products: state.data.products,
        cases: state.data.cases,
        questions: state.data.questions,
        locations: state.data.locations
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Sidebar);
