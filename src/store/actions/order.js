import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const purchaseSandwichSuccess = (orderData) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_SUCCESS,
    orderId: orderData.id,
    orderData: orderData,
    loading: false
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
      .post('orders', orderData)
      .then((response) => {
        dispatch(purchaseSandwichSuccess(response.data));
      })
      .catch((err) => {
        dispatch(purchaseSandwichFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};
