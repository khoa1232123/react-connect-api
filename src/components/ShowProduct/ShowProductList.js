import React, { Component } from "react";
import ShowProductItem from "./ShowProductItem";
import { connect } from "react-redux";
import { actFetchProductsRequest, actAddToCart } from "../../redux/actions";

export class ShowProductList extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }



  render() {
    var { products } = this.props;
    
    return <div className="card-group">{this.showProducts(products)}</div>;
  }
  showProducts(products) {
    var result = null;
    var { onAddToCart } = this.props;
    result = products.map((product, index) => {
      if (product.status) {
        return (
          <ShowProductItem
            key={index}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      } else {
        return ('');
      }
    });
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onAddToCart: (id, quantity) => {
      dispatch(actAddToCart(id, quantity));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProductList);
