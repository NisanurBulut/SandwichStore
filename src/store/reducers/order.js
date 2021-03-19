import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_SANDWICH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_SANDWICH_SUCCESS:
      const newData = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newData),
      };
    case actionTypes.PURCHASE_SANDWICH_FAIL:
      return {
        ...state,
        loading: false,
      };
      case actionTypes.FETCH_ORDERS_START:
        return {
          ...state,
          loading: true,
        };
        case actionTypes.FETCH_ORDERS_SUCCESS:
          return {
            ...state,
            orders:action.orders,
            loading: false,
          };
        case actionTypes.FETCH_ORDERS_FAIL:
          return {
            ...state,
            loading: false,
          };
    default:
      return state;
  }
};

export default orderReducer;
