import React, { Component } from "react";

export class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label forhtml="exampleInputEmail1">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="txtName"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label forhtml="exampleInputPassword1">Giá</label>
          <input
            type="number"
            className="form-control"
            placeholder="1000"
            name="txtPrice"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label forhtml="exampleInputPassword1">Hình ảnh</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="txtImage"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label forhtml="exampleInputPassword1">Trong kho</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            name="txtImage"
            onChange={this.onChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="chkStatus"
            onChange={this.onChange}
          />
          <label className="form-check-label" forhtml="exampleCheck1">
            Hiển thị
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductForm;
