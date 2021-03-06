import React, { useState } from 'react';
import { StyledLink, Wrapper } from './Sidebar.styled';
import { connect, ConnectedProps } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import '../../transitions/transitions.css';
import {
    BranchLocation,
    Case,
    Links,
    Product,
    Question
} from '../../store/types/types';
import ProductPanel from '../../components/Sidebar/ProductPanel/ProductPanel';
import SidebarCategoryPanel from '../../components/Sidebar/SidebarCategoryPanel/SidebarCategoryPanel';
import PanelContainer from '../../components/Sidebar/PanelContainer/PanelContainer';
import { dataService } from '../../services';
import ProductSubPanel from '../../components/Sidebar/ProductSubpanel/ProductSubPanel';
import SubPanelContainer from '../../components/Sidebar/SubPanelContainer/SubPanelContainer';
import { updateObject } from '../../shared/utility';

const Sidebar: React.FC<PropsFromRedux> = (props) => {
    const { products, cases, questions, locations, links } = props;
    const [activeTab, setActiveTab] = useState({ product: '', tab: '' });

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

    const productRoutes = [
        { label: 'Składniki', route: 'ingredients' },
        { label: 'Przechowywanie', route: 'storage' },
        { label: 'Stosowanie', route: 'dosage' },
        { label: 'Skutki Uboczne', route: 'sideEffects' },
        { label: 'Komu polecamy?', route: 'recommendedFor' },
        { label: 'Za zgodą lekarza', route: 'needsApproval' },
        { label: 'Komu nie polecamy?', route: 'notRecommendedFor' },
        { label: 'Trudne pytania', route: 'questions' }
    ];

    const selectTabHandler = (productName: string, tab: string) => {
        setActiveTab(
            updateObject(activeTab, {
                product: productName,
                tab: tab
            })
        );
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
        .map((element: Product, index) => (
            <React.Fragment key={uuidv4()}>
                <ProductPanel
                    active={activeProduct === element.name}
                    clicked={() => productSelectHandler(element)}
                >
                    {element.name}
                </ProductPanel>
                <SubPanelContainer active={activeProduct === element.name}>
                    {productRoutes.map((route) => {
                        let currentRoute = products[index];
                        return currentRoute[`${route.route}` as keyof Product]
                            .length! > 0 || route.route === 'ingredients' ? (
                            currentRoute.ingredients.day ? (
                                <StyledLink
                                    to={`/products/${element.slug}/${route.route}`}
                                    key={uuidv4()}
                                    replace
                                >
                                    <ProductSubPanel
                                        active={
                                            route.label === activeTab.tab &&
                                            element.name === activeTab.product
                                        }
                                        clicked={() =>
                                            selectTabHandler(
                                                element.name,
                                                route.label
                                            )
                                        }
                                    >
                                        {route.label}
                                    </ProductSubPanel>
                                </StyledLink>
                            ) : null
                        ) : null;
                    })}
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

    const linksLoadHandler = async () => {
        if (links.length === 0) {
            await dataService.getAllLinks();
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
            <StyledLink to={`/cases`} replace>
                <SidebarCategoryPanel clicked={casesLoadHandler}>
                    Choroby
                </SidebarCategoryPanel>
            </StyledLink>
            <StyledLink to={'/questions'} replace>
                <SidebarCategoryPanel clicked={questionsLoadHandler}>
                    Pytania i odpowiedzi
                </SidebarCategoryPanel>
            </StyledLink>
            <StyledLink to={`/locations`} replace>
                <SidebarCategoryPanel clicked={locationsLoadHandler}>
                    Gdzie nas znaleźć
                </SidebarCategoryPanel>
            </StyledLink>
            <StyledLink to={`/links`} replace>
                <SidebarCategoryPanel clicked={linksLoadHandler}>
                    Polecane połączenia
                </SidebarCategoryPanel>
            </StyledLink>
        </Wrapper>
    );
};

const mapStateToProps = (state: {
    data: {
        products: Product[];
        cases: Case[];
        questions: Question[];
        locations: BranchLocation[];
        links: Links[];
    };
}) => {
    return {
        products: state.data.products,
        cases: state.data.cases,
        questions: state.data.questions,
        locations: state.data.locations,
        links: state.data.links
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(Sidebar));
