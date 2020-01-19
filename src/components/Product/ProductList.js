import React, { Component } from "react";

export class ProductList extends Component {
  render() {
    return (
      <>
      <table className="table table-striped table-inverse align-center align-middle mt-3 ">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Trong kho</th>
            <th>Trạng thái</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
      </>
    );
  }
}

export default ProductList;
