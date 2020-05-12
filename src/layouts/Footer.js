//无状态组件
import React from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;
export default function Header() {
  return (
    <Footer className="footer">
      Copyright <Icon type="copyright" /> 2020 大宇onLine
    </Footer>
  );
}
