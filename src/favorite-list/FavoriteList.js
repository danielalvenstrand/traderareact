import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../product/Product';
import {toggleFavorite, clearFavorites} from "../favorite-list/FavoriteList.actions";

class FavoriteList extends Component {

    toggleFavorite(product) {
        this.props.toggleFavorite(product);
    }

    favoriteSum() {
        return this.props.products.reduce((sum, product) => sum+=product.price, 0);
    }

    render() {
        return (
            <div className="FavoriteList">
                <header id="header">
                    <section>
                        <h1>{this.props.products.length} Product(s) <span className="amount">{this.favoriteSum()} SEK</span></h1>
                    </section>
                    <section>
                        <button onClick={this.props.clearFavorites}>Clear all</button>
                </section>
            </header>
                <div className="content">
                    {this.props.products ? this.props.products.map(product => (
                            <Product
                                key={product.id}
                                toggleFavorite={() => this.toggleFavorite(product)}
                                favorite={true}
                                {...product}
                            ></Product>
                        )): ''}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ready: state.app.ready,
    products: state.favoriteList
});

const mapDispatchToProps = (dispatch) => ({
    toggleFavorite: (product) => {dispatch(toggleFavorite(product))},
    clearFavorites: () => {dispatch(clearFavorites)}
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);