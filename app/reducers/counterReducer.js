import types from './../actions/actionTypes';
// Set initialState for default state in app
const initialState = {
  isFetching: false,
  count: 0,
  hasError: false,
  errorMessage: '',
  errorLogs: []
}

const counterReducer = (state = initialState, action) => {
  // Get payload from dispatch params
  const { payload } = action;
  // Check dispatch type case and return update state
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
