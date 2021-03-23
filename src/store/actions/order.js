import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const purchaseSandwichSuccess = (orderData) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_SUCCESS,
    orderId: orderData.id,
    orderData: orderData,
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

export const purchaseSandwich = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseSandwichStart());
    axios
      .post(
        'orders',
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          delay: 1000,
        }
      )
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
export const setOrderFinish = () => {
  return {
    type: actionTypes.SET_ORDER_FINISH,
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

export const fetchOrders = (token) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get(
        'orders',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          delay: 1000,
        },
      )
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
