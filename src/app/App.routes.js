import React from 'react';
import {Route, Switch} from 'react-router';
import ProductList from "../product-list/ProductList";
import FavoriteList from "../favorite-list/FavoriteList";

const Routes = () => (
    <Switch>
        <Route name="Home" path="/" exact component={ProductList} />
        <Route name="Product List" path="/products" component={ProductList} />
        <Route name="Favorite List" path="/favorites" component={FavoriteList} />
    </Switch>
);

export default Routes;