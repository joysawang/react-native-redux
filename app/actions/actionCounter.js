import types from './actionTypes';

export function increase() {
  return (dispatch, getState) => {
    try {
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
