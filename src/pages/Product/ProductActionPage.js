import React, { Component } from "react";
import imgDefault from "../../images/default.jpg";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest
} from "../../redux/actions";
import { connect } from "react-redux";

export class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: 0,
      txtImage: "",
      txtInStock: 0,
      chkStatus: false
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetProduct(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      var { product } = nextProps;
      this.setState({
        id: product.id,
        txtName: product.name,
        txtPrice: product.price,
        txtImage: product.image,
        txtInStock: product.instock,
        chkStatus: product.status
      });
    }
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = event => {
    event.preventDefault();
    var { id, txtName, txtPrice, txtImage, txtInStock, chkStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      image: txtImage,
      instock: txtInStock,
      status: chkStatus
    };
    if (id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    var { txtName, txtPrice, txtImage, txtInStock, chkStatus } = this.state;
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên sản phẩm"
                name="txtName"
                value={txtName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Giá</label>
              <input
                type="number"
                className="form-control"
                placeholder="1000"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <label>Hình ảnh</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="txtImage"
                    value={txtImage}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={txtImage.length > 0 ? txtImage : imgDefault}
                    className="img-thumbnail imgForm"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Trong kho</label>
              <input
                type="number"
                className="form-control"
                placeholder="Password"
                name="txtInStock"
                value={txtInStock}
                onChange={this.onChange}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="chkStatus"
                value={chkStatus}
                onChange={this.onChange}
                checked={chkStatus}
              />
              <label className="form-check-label" forhtml="exampleCheck1">
                Hiển thị
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    product: state.productItem
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductRequest(product));
    },
    onGetProduct: id => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(actUpdateProductRequest(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
