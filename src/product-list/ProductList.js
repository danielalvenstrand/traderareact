import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../product/Product';
import { fetchProducts } from "./ProductList.actions"
import {toggleFavorite} from "../favorite-list/FavoriteList.actions";

class ProductList extends Component {

    componentDidMount() {
        if (!this.props.ready) this.props.populateProducts();
    }

    toggleFavorite(product) {
        this.props.toggleFavorite(product);
    }

    checkFavorite(product) {
        return this.props.favorites.find(favorite => favorite.id === product.id);
    }

    render() {
        return (
            <div className="ProductList">
                <header id="header">
                    <section>
                        <h1>Product list</h1>
                    </section>
                </header>
                <div className="content">
                    {this.props.products.map(product => (
                        <Product
                            key={product.id}
                            toggleFavorite={() => this.toggleFavorite(product)}
                            favorite={this.checkFavorite(product)}
                            {...product}
                        ></Product>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ready: state.app.ready,
    products: state.productList,
    favorites: state.favoriteList
});

const mapDispatchToProps = (dispatch) => ({
    populateProducts: () => { dispatch(fetchProducts()) },
    toggleFavorite: (product) => {dispatch(toggleFavorite(product))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);