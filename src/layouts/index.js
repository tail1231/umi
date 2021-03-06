import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import './index.scss';

const { Content } = Layout;

function BasicLayout({ children, location }) {
  console.log(location);
  if (location.pathname === '/login') {
    return children;
  }
  return (
    <Layout className="basic-layout">
      <Header />
      <Content className="content">{children}</Content>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
