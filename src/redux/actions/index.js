import * as Types from '../constants/ActionTypes';
import connectAPI from '../../utils/connectAPI';

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return connectAPI('products').then(res => {
      dispatch(actFetchProducts(res.data));
    })
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return connectAPI(`products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id));
    })
  }
}

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return connectAPI(`products`, 'POST', product).then(res => {
      dispatch(actAddProduct(res.data));
    })
  }
}

export const actGetProduct = (product) => {
  return {
    type: Types.GET_PRODUCT,
    product
  }
}
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return connectAPI(`products/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data));
    })
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}
export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return connectAPI(`products/${product.id}`, 'PUT', product).then(res => {
      dispatch(actUpdateProduct(res.data));
    })
  }
}

export const actAddToCart = (id, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    id,
    quantity
  }
}

export const actDeleteCart = (id) => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    id
  }
}

export const actUpdateCart = (id, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    id,
    quantity
  }
}
