import types from './../actions/actionTypes';

const initialState = {
  isFetching: false,
  count: 0,
  hasError: false,
  errorMessage: '',
  errorLogs: []
}

const counterReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.COUNTER_RESET:
      return {
        ...initialState
      }
    case types.COUNTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false
      }
    case types.COUNTER_INCREASE:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        count: payload.count
      }
    case types.COUNTER_DECREASE:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        count: payload.count
      }
    case types.COUNTER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: payload.errorMessage,
        errorLogs: [...state.errorLogs, payload.errorMessage]
      }
    default:
      return state;
  }
}

export default counterReducer;
