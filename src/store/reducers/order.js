import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const purchaseSandwichSuccess = (state, action) => {
  const newData = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newData),
  });
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_SANDWICH_START:
      return updateObject(state, { loading: true, purchased: false });
    case actionTypes.PURCHASE_SANDWICH_SUCCESS:
      return purchaseSandwichSuccess(state, action);
    case actionTypes.PURCHASE_SANDWICH_FAIL:
      return updateObject(state, { loading: false, purchased: false });
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders, loading: false });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.SET_ORDER_FINISH:
      return updateObject(state, { loading: false, purchased: false });
    default:
      return state;
  }
};

export default orderReducer;
