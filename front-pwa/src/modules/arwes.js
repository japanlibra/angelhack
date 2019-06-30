import axios from 'axios';

// action
const CHECK_BALANCE = 'CHECK_BALANCE';

const checkBalance = url => dispatch => {
  axios({
    url,
    method: 'get'
  })
    .then(res => {
      console.log(res);
      dispatch({
        type: CHECK_BALANCE,
        payload: {
          accountState: res.data
        },
        meta: {
          isLoaded: true
        }
      });
    })
    .catch(err => {
      console.info(err);
    });
};

const checkBalanceDummy = url => dispatch => {
  dispatch({
    type: CHECK_BALANCE,
    payload: {
      accountState: {
        balance: '108000'
      }
    },
    meta: {
      isLoaded: true
    }
  });
};

const transfer = url => dispatch => {
  axios({
    url,
    method: 'get'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.info(err);
    });
};

// reducer
const initialState = {
  payload: {
    accountState: {
      balance: '-'
    }
  },
  meta: {
    isLoaded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_BALANCE: {
      return Object.assign({}, state, {
        ...action
      });
    }
    default: {
      return state;
    }
  }
};

export { checkBalance, checkBalanceDummy, transfer };
export default reducer;
