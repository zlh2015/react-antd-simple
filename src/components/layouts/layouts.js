import React, { useState } from 'react';
import { Layout } from 'antd';
import { WithMenuActiveHeader, WithMenuActiveSider } from '../menu';

// contents f :footer, h :header, s :sider, c :centent
// layouts T :top, C :center, B :bottom
// nesting layouts NT :nest top, NC :nest center, NB: nest bottom 
// example ThCcBf, ThCscBf, ThCsNThNCcNBfBf

const { Sider, Header, Content } = Layout;


const ThCcLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0, height: '48px' }}>        
        <WithMenuActiveHeader path={props.location.pathname} collapsed={collapsed} setCollapsed={setCollapsed} sidebar={false} />
      </Header>
      <Content             
        style={{
          margin: '0',
          padding: 7,
          background: '#fff',
          height: "calc(100vh - 50px)",
          overflow: "auto",
        }}>
        {props.children}
      </Content>
    </Layout>
  );
};

const CsNThNCcNLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider width={233} trigger={null} collapsible collapsed={collapsed}
        style={{
          height: "100vh",
          overflowY: "auto",
          overflowX: false
        }}
      >
        <WithMenuActiveSider path={props.location.pathname} />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, height: '48px' }}>        
          <WithMenuActiveHeader path={props.location.pathname} collapsed={collapsed} setCollapsed={setCollapsed} sidebar={true} />
        </Header>
        <Content             
          style={{
            margin: '0',
            padding: 7,
            background: '#fff',
            height: "calc(100vh - 50px)",
            overflow: "auto",
          }}>
        </Content>
      </Layout>
    </Layout>
  );
};

export {
  ThCcLayout,
  CsNThNCcNLayout
}