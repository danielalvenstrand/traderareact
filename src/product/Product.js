import React from 'react';

const Product = (props) => (
    <article className="product card">
        <figure className="product-image-wrapper">
            <img src={props.image} alt={props.title} />
        </figure>
        <section className="card-content">
            <h1>
                {props.title}
            </h1>
            <p>Price: {props.price} {props.currency}</p>
            <button onClick={props.toggleFavorite} className={props.favorite?'favorite':''}>{props.favorite?'Remove from':'Add to'} favorites</button>
      </section>
    </article>
);

export default Product;