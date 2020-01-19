import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm('Ban co chac muon xoa san pham nay?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          {product.image.length > 0 ? (
            <img src={product.image} alt="" className="thumbnail" />
          ) : (
            ""
          )}
        </td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>{product.instock > 0 ? product.instock : "Het hang"}</td>
        <td>
          {product.status === true ? (
            <label className="btn btn-info btn-sm mb-0">Hiển thị</label>
          ) : (
            <label className="btn btn-secondary btn-sm mb-0">Ẩn</label>
          )}
        </td>
        <td>
          <Link to={`/products/edit/${product.id}`} className="btn btn-warning edit">
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger delete ml-2"
            onClick={() => this.onDelete(product.id)}
          >
            del
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
