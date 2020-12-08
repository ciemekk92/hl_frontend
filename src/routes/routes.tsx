import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import { connect, ConnectedProps } from 'react-redux';
import { Product } from '../store/types/types';
import ProductView from '../views/ProductView/ProductView';

const Routes: React.FC<PropsFromRedux> = (props) => {
    const { products } = props;

    return (
        <>
            <Route path={'/'} exact component={Dashboard} />
            {products.length > 0 ? (
                <Route
                    exact
                    path={'/products/:slug'}
                    render={(props) => (
                        <ProductView
                            product={
                                products.filter(
                                    (product) =>
                                        product.slug === props.match.params.slug
                                )[0]
                            }
                            {...props}
                        />
                    )}
                />
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
