import * as usersServices from '../services/users';
export default {
  namespace: 'users',
  state: {
    list: [],
    total: 0,
    page: 1,
    pageSize: 5,
  },
  reducers: {
    setData(state) {
      return { ...state };
    },
  },
  effects: {
    *fetch({}, { call, put }) {
      yield call(usersServices.fetch, { page: 1, pageSize: 5 });
      //   yield put({ type: 'setData' });
    },
  },
  subscriptions: {
    setUp({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname == '/users') {
          dispatch({ type: 'fetch', payload: { page: 1 } });
        }
      });
    },
  },
};
