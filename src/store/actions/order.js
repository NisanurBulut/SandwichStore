import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const purchaseSandwichSuccess = (orderData) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_SUCCESS,
    orderId: orderData.id,
    orderData: orderData,
    loading: false,
  };
};

export const purchaseSandwichFail = (error) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_FAIL,
    error: error,
  };
};

export const purchaseSandwichStart = () => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_START,
  };
};

export const purchaseSandwich = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseSandwichStart());
    axios
      .post('orders', orderData, {
        delay: 1000,
      })
      .then((response) => {
        dispatch(purchaseSandwichSuccess(response.data));
      })
      .catch((err) => {
        dispatch(purchaseSandwichFail(err));
      });
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get('orders', {
        delay: 1000,
      })
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ id: key, ...response.data[key] });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
