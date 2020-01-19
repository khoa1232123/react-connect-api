import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import {
  actFetchProductsRequest,
  actUpdateCart,
  actDeleteCart
} from "../../redux/actions";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
  }

  UNSAFE_componentWillMount() {}

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.products && nextProps.cart) {
      var { products, cart } = nextProps;
      this.setState({
        cartList: this.findProductInCart(cart, products)
      });
    }
  }

  findProductInCart = (cart, products) => {
    var result = [];
    if (cart.length > 0 && products.length > 0) {
      cart.forEach(cartItem => {
        products.forEach(product => {
          if (product.id === cartItem.id) {
            result.push({ product: product, quantity: cartItem.quantity });
          }
        });
      });
    }
    return result;
  };

  render() {
    var { cartList } = this.state;
    return (
      <>
        <table className="table table-hover align-center align-middle">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Hinh anh</th>
              <th scope="col">Ten</th>
              <th scope="col">Gia</th>
              <th scope="col">so luong</th>
              <th scope="col">Tien</th>
              <th scope="col">Hanh dong</th>
            </tr>
          </thead>
          <tbody>{this.onShowCartItem(cartList)}</tbody>
        </table>
      </>
    );
  }
  onShowCartItem(cartList) {
    var result = null;
    var { onUpdateCart, onDeleteCart } = this.props;

    result = cartList.map((cartItem, index) => {
      if (cartItem.product.status) {
        return (
          <CartItem
            key={index}
            cartItem={cartItem}
            onUpdateCart={onUpdateCart}
            onDeleteCart={onDeleteCart}
            index={index}
          />
        );
      } else {
        return (
          ''
        );
      }
    });
    return result;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onUpdateCart: (id, quantity) => {
      dispatch(actUpdateCart(id, quantity));
    },
    onDeleteCart: id => {
      dispatch(actDeleteCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
