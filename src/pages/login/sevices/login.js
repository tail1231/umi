import fetch from 'dva/fetch';
/**
 *
 * @param {用户名} params.username
 * @param {密码} params.pwd
 */

const login = params => {
  //发起登录请求 https://cjy-react-interface.herokuapp.com/api/users/login
  return fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default login


