import React, { Component } from "react";

export class CartItem extends Component {
  render() {
    var { cartItem, index } = this.props;
    var { product, quantity } = cartItem;

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          <img src={product.image} alt="" className="img-thumbnail thumbnail" />
        </td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button
            type="button"
            className="btn btn-info btn-sm"
            onClick={() => this.onUpdateCart(product.id, -1)}
          >
            -
          </button>{" "}
          {quantity}{" "}
          <button
            type="button"
            className="btn btn-info btn-sm"
            onClick={() => this.onUpdateCart(product.id, 1)}
          >
            +
          </button>
        </td>
        <td>{product.price * quantity}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDeleteCart(product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  onDeleteCart(id) {
    if (window.confirm("ban co chac muon xoa?")) {
      this.props.onDeleteCart(id);
    }
  }

  onUpdateCart(id, number) {
    var { onUpdateCart, cartItem } = this.props;
    var { product, quantity } = cartItem;
    if (quantity + number <= product.instock) {
      if (quantity + number > 0) {
        onUpdateCart(id, number);
      } else {
        this.props.onDeleteCart(id);
      }
    }
  }
}

export default CartItem;
