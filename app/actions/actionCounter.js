import types from './actionTypes';

export function increase() {
  return (dispatch, getState) => {
    try {
      // dispatch is function send type and payload to reducers
      // All reducers can be get dispatch anytime
      // Reducers can use condition to get dispatch type for update state
      dispatch({ type: types.COUNTER_REQUEST });
      
      const { counter } = getState();
      dispatch({
        type: types.COUNTER_INCREASE,
        payload: {
          count: counter.count + 1
        }
      });
    } catch (e) {
      dispatch({
        type: types.COUNTER_ERROR,
        payload: {
          errorMessage: e.message
        }
      });
    }
  }
}

export function decrease() {
  return (dispatch, getState) => {
    try {
      dispatch({ type: types.COUNTER_REQUEST });

      const { counter } = getState();
      dispatch({
        type: types.COUNTER_DECREASE,
        payload: {
          count: counter.count - 1
        }
      });
    } catch (e) {
      dispatch({
        type: types.COUNTER_ERROR,
        payload: {
          errorMessage: e.message
        }
      });
    }
  }
}

export function reset() {
  return (dispatch) => {
    dispatch({ type: types.COUNTER_RESET });
  }
}
