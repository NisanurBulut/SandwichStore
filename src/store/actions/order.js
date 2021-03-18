import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const purchaseSandwichSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseSandwichFail = (error) => {
  return {
    type: actionTypes.PURCHASE_SANDWICH_FAIL,
    error: error,
  };
};

export const purchaseSandwichStart = (orderData) => {
  return (dispatch) => {
    axios
      .post('orders', orderData)
      .then((response) => {
        console.log(response.data);
        purchaseSandwichSuccess(response.data);
      })
      .catch((err) => {
        purchaseSandwichFail(err);
      });
  };
};
