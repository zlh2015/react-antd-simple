import React from 'react';
import { Menu } from 'antd';
import styles from './sider.module.css';
import logo from '../../assets/images/leaf_logo.svg';
import { getMenuItems } from './utils';

const Sider = ({menu, current}) => {

  return (
    <div className="ant-layout-sider-children">
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
          <h1>React Antd Simple</h1>
        </a>
      </div>
      <Menu
        theme="dark"
        style={{ padding: '16px 0', width: '100%' }}
        defaultOpenKeys={[current]}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={true}
      >
        {
          getMenuItems(menu)
        }
      </Menu>
    </div>
  );
};

export default Sider;