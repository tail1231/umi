/**
 * title: 登录
 */
import React from 'react';
import { login } from './sevices/login';
import router from 'umi/router';
import { Layout, Icon, Input, Form, Button } from 'antd';
import styles from './index.scss';

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };

const index = props => {
  const { getFieldDecorator, validateFields } = props.form;
  //form 校验
  const handleSubmit = () => {
    validateFields((err, values) => {
      if (!err) {
        login(values).then(data => router.push('/'));
        // console.log(values);
      }
    });
  };
  return (
    <Layout>
      <Content className={styles.content}>
        <div className={styles.form}>
          <h1>
            <img src={require('@/assets/logo2.png')} alt="" />
            管理系统
          </h1>
          <Form>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '用户名不能为空',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={iconStyle} />}
                  placeholder="请输入用户名"
                  autoFocus
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ],
              })(
                <Input
                  type="password"
                  prefix={<Icon type="lock" style={iconStyle} />}
                  placeholder="请输入密码"
                  autoFocus
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" style={{ width: '100%' }}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer className={styles.footer}>
        Copyright <Icon type="copyright" /> 2020 大宇onLine
      </Footer>
    </Layout>
  );
};

export default Form.create()(index);
