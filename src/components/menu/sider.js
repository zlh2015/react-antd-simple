import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
import styles from './sider.module.css';
import logo from '../../assets/images/logo.svg';
import { getMenuItems } from './utils';

const Sider = ({data, current, collapsed}) => {

  return (
    <div className="ant-layout-sider-children">
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
          <h1>React Easy Start</h1>
        </a>
      </div>
      <Menu
        theme="dark"
        style={{ padding: '16px 0', width: '100%' }}
        defaultOpenKeys={[current]}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {
          getMenuItems(data)
        }
      </Menu>
    </div>
  );
};

export default Sider;