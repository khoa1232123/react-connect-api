import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ShowProductItem extends Component {
  render() {
    var {id, name, price, image} = this.props.product;
    return (
      <>
        <div className="col-4 mb-4">
          <div className="card">
            <img
              className="card-img-top"
              src={image}
              alt={name}
            />
            <div className="card-body">
              <Link to={`/products/detail/${id}`}><h4 className="card-title">{name}</h4></Link>
              <p className="card-text">{price}$</p>
              <button type="button" className="btn btn-warning" onClick={() => this.onAddToCart(id)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  onAddToCart = (id, quantity = 1) => {
    this.props.onAddToCart(id, quantity);
  }
}

export default ShowProductItem;
