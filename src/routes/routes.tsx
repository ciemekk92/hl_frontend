import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import { connect, ConnectedProps } from 'react-redux';
import { Product } from '../store/types/types';
import ProductView from '../views/ProductView/ProductView';
import {
    Ingredients,
    Dosage,
    SideEffects,
    RecommendedFor,
    NotRecommendedFor,
    Questions,
    CanBeUsedAlongside
} from '../containers/Product';

const Routes: React.FC<PropsFromRedux> = (props) => {
    const { products } = props;

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
                        path={'/products/:slug/canBeUsedAlongside'}
                        render={(props) => (
                            <CanBeUsedAlongside
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
        </>
    );
};

const mapStateToProps = (state: {
    data: {
        products: Product[];
    };
}) => {
    return {
        products: state.data.products
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Routes);
