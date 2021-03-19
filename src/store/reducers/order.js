import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_SANDWICH_START:
      return updateObject(state, { loading: true });
    case actionTypes.PURCHASE_SANDWICH_SUCCESS:
      const newData = updateObject(action.orderData, { id: action.orderId });
      return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newData),
      });
    case actionTypes.PURCHASE_SANDWICH_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders, loading: false });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default orderReducer;
