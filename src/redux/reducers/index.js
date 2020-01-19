import {combineReducers} from 'redux';
import products from './products';
import productItem from './productItem';
import cart from './cart';

const appReducers = combineReducers({
  products,
  productItem,
  cart
});

export default appReducers;
