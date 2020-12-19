import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import { connect, ConnectedProps } from 'react-redux';
import {
    BranchLocation,
    Case,
    Links,
    Product,
    Question
} from '../store/types/types';
import {
    Ingredients,
    Storage,
    Dosage,
    SideEffects,
    RecommendedFor,
    NotRecommendedFor,
    Questions,
    NeedsApproval
} from '../containers/Product';
import LocationsView from '../views/LocationsView/LocationsView';
import ProductLinkingView from '../views/ProductLinkingView/ProductLinkingView';
import QuestionsView from '../views/QuestionsView/QuestionsView';
import CasesView from '../views/CasesView/CasesView';

const Routes: React.FC<PropsFromRedux> = (props) => {
    const { products, locations, links, questions, cases } = props;

    const filterProducts = (productArray: Product[], renderProps: any) => {
        const filtered = productArray.filter(
            (product) => product.slug === renderProps.match.params.slug
        );
        return filtered[0];
    };

    return (
        <>
            <Route path={'/'} exact component={Dashboard} />
            {products.length > 0 ? (
                <>
                    <Route
                        exact
                        path={'/products/:slug/ingredients'}
                        render={(props) => (
                            <Ingredients
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/storage'}
                        render={(props) => (
                            <Storage
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/dosage'}
                        render={(props) => (
                            <Dosage
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/sideEffects'}
                        render={(props) => (
                            <SideEffects
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/recommendedFor'}
                        render={(props) => (
                            <RecommendedFor
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/needsApproval'}
                        render={(props) => (
                            <NeedsApproval
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/notRecommendedFor'}
                        render={(props) => (
                            <NotRecommendedFor
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={'/products/:slug/questions'}
                        render={(props) => (
                            <Questions
                                product={filterProducts(products, props)}
                                {...props}
                            />
                        )}
                    />
                </>
            ) : null}
            {locations.length > 0 ? (
                <Route
                    exact
                    path={'/locations'}
                    render={(props) => <LocationsView />}
                />
            ) : null}
            {links.length > 0 ? (
                <Route
                    exact
                    path={'/links'}
                    render={(props) => <ProductLinkingView />}
                />
            ) : null}
            {questions.length > 0 ? (
                <Route
                    exact
                    path={'/questions'}
                    render={(props) => <QuestionsView />}
                />
            ) : null}
            {cases.length > 0 ? (
                <Route
                    exact
                    path={'/cases'}
                    render={(props) => <CasesView />}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state: {
    data: {
        products: Product[];
        locations: BranchLocation[];
        links: Links[];
        questions: Question[];
        cases: Case[];
    };
}) => {
    return {
        products: state.data.products,
        locations: state.data.locations,
        links: state.data.links,
        questions: state.data.questions,
        cases: state.data.cases
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Routes);
