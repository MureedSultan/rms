import Head from 'next/head';
import LeftNav from './LeftNav';

import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;

function Layout({ loading = false, children }) {
  return (
    <>
      <AntLayout>
        <Head>
          <title>Next.js with Auth0</title>
        </Head>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div,
          div#__next > section,
          div#__next > div > div {
            height: 100%;
          }
          .logo {
            width: 120px;
            height: 31px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px 28px 16px 0;
            float: left;
          }
          .headerMenu {
            float: right;

          }
        `}</style>
        <Header className="header">
    <div className="logo" />
          <Menu className="headerMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <AntLayout hasSider={true}>
          <LeftNav />
          <AntLayout style={{ padding: '24px 16px 0' }}>
            <Content style={{ minHeight: 280 }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>
              RMS ©2020 Created by Sultan
            </Footer>
          </AntLayout>
        </AntLayout>
      </AntLayout>
    </>
  );
}

export default Layout;
