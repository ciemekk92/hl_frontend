import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import { connect, ConnectedProps } from 'react-redux';
import { BranchLocation, Product } from '../store/types/types';
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

const Routes: React.FC<PropsFromRedux> = (props) => {
    const { products, locations } = props;

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
        </>
    );
};

const mapStateToProps = (state: {
    data: {
        products: Product[];
        locations: BranchLocation[];
    };
}) => {
    return {
        products: state.data.products,
        locations: state.data.locations
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Routes);
