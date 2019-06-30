import axios from 'axios';

// action
const LOAD_TEST = 'LOAD_TEST';

const loadTest = () => dispatch => {
  axios({
    url: 'https://randomuser.me/api/',
    method: 'get'
  }).then(res => {
    dispatch({
      type: LOAD_TEST,
      payload: {
        res
      }
    });
  });
};

// reducer
const initialState = {
  payload: {
    data: 'init'
  },
  meta: {
    isLoaded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TEST: {
      return Object.assign({}, state, {
        payload: {
          ...state.payload,
          ...action.payload
        }
      });
    }
    default: {
      return state;
    }
  }
};

export { loadTest };
export default reducer;
