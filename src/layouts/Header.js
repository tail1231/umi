//无状态组件
import React from 'react';
import { Menu, Dropdown, Icon, Affix, Layout } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

const MenuItem = Menu.Item;
const { Header } = Layout;
function index({ location }) {
  console.log(location);
  const menu = (
    <Menu>
      <MenuItem>
        <span>退出</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Affix offsetTop={0}>
      <Header className="header">
        <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
        <Menu className="menus" mode="horizontal" theme="dark">
          <MenuItem key="/" selectedKeys={location.pathname}>
            <Link to="/">首页</Link>
          </MenuItem>
        </Menu>
        <div className="right">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="javascript:;">
              <Icon type="user" style={{ marginRight: 3 }} /> admin
            </a>
          </Dropdown>
        </div>
      </Header>
    </Affix>
  );
}

export default withRouter(index);
