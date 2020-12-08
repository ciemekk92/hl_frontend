import React, { useRef, useState } from 'react';
import { StyledLink, Wrapper } from './Sidebar.styled';
import { connect, ConnectedProps } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import '../../transitions/transitions.css';
import {
    BranchLocation,
    Case,
    Product,
    Question
} from '../../store/types/types';
import ProductPanel from '../../components/Sidebar/ProductPanel/ProductPanel';
import SidebarCategoryPanel from '../../components/Sidebar/SidebarCategoryPanel/SidebarCategoryPanel';
import PanelContainer from '../../components/Sidebar/PanelContainer/PanelContainer';
import { dataService } from '../../services';
import ProductSubPanel from '../../components/Sidebar/ProductSubpanel/ProductSubPanel';
import SubPanelContainer from '../../components/Sidebar/SubPanelContainer/SubPanelContainer';

const Sidebar: React.FC<PropsFromRedux> = (props) => {
    const { products, cases, questions, locations } = props;

    const [activeProduct, setActiveProduct] = useState('');
    const [areProductsShown, setAreProductsShown] = useState(false);
    const [areCasesShown, setAreCasesShown] = useState(false);
    const [areQuestionsShown, setAreQuestionsShown] = useState(false);
    const [areLocationsShown, setAreLocationsShown] = useState(false);

    const productSelectHandler = (product: Product) => {
        if (activeProduct !== product.name) {
            setActiveProduct(product.name);
        } else {
            setActiveProduct('');
        }
    };

    const productMapHandler = products
        .sort((a: Product, b: Product) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
                return -1;
            }
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1;
            }
            return 0;
        })
        .map((element: Product) => (
            <React.Fragment key={uuidv4()}>
                {/*<StyledLink to={`/products/${element.slug}`}>*/}
                <ProductPanel
                    active={activeProduct === element.name}
                    clicked={() => productSelectHandler(element)}
                >
                    {element.name}
                </ProductPanel>
                {/*</StyledLink>*/}
                <SubPanelContainer active={activeProduct === element.name}>
                    <ProductSubPanel>Składniki</ProductSubPanel>
                    <ProductSubPanel>Stosowanie</ProductSubPanel>
                    <ProductSubPanel>Skutki Uboczne</ProductSubPanel>
                    <ProductSubPanel>Dla kogo polecamy?</ProductSubPanel>
                    <ProductSubPanel>Dla kogo nie polecamy?</ProductSubPanel>
                    <ProductSubPanel>Polecane połączenia</ProductSubPanel>
                    <ProductSubPanel>Trudne pytania</ProductSubPanel>
                </SubPanelContainer>
            </React.Fragment>
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

export default connector(React.memo(Sidebar));
