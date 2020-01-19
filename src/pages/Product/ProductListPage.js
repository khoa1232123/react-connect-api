import React, { Component } from "react";
import ProductList from "../../components/Product/ProductList";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Product/ProductItem";
import { connect } from "react-redux";
import { actFetchProductsRequest, actDeleteProductRequest, actUpdateProductRequest } from "../../redux/actions";

export class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
      this.props.fetchAllProducts();
  }
  
  onDelete = id => {
    this.props.onDeleteProduct(id);
  };


  render() {
    var { products } = this.props;
    return (
      <>
        <Link to="/products/add" className="btn btn-info">
          Thêm sản phẩm
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
            onUpdateStatus={this.props.onUpdateStatus}
          />
        );
      });
      return result;
    }
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
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
    onUpdateStatus: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
