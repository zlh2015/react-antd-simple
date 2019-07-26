import React from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import * as LocalStorage from '../../utils/localstorage';
import logo from '../../assets/images/leaf_logo.svg';
import styles from './header.module.css';
import { getMenuItems } from './utils';

const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/setting">
        <Icon type="setting" />&nbsp;系统设置
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Link to="/signout">
        <Icon type="poweroff" />&nbsp;退出登录
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = ({menu, current, collapsed, setCollapsed, sidebar}) => {
  console.log('menu', menu);
  return (
    <div className={styles["header-swrapper"]}>
      <div className={sidebar ? styles["header-left-light"] : styles["header-left-dark"]}>
        {
          sidebar ?
          <Icon
            className={styles["header-trigger"]}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
          :
          <div className={styles["header-logo"]}>
            <a href="/">
              <img src={logo} alt="logo" />
              <span>邮件管理平台</span>
            </a>
          </div>
        }
      </div>
      <div className={sidebar ? styles["header-content-light"] : styles["header-content-dark"]}>
        {
          sidebar ?
            null
            :
            <Menu
              className={styles["header-menu"]}
              theme={sidebar ? "light" : "dark"}
              defaultOpenKeys={[]}
              selectedKeys={[current]}
              mode="horizontal"
            >
              {
                getMenuItems(menu)
              }
            </Menu>
        }
      </div>
      <div className={sidebar ? styles["header-right-light"] : styles["header-right-dark"]}>
        <div className={styles['header-user-info']}>
          <Dropdown overlay={userMenu} placement="bottomRight">
            <span className={styles['header-dropdown-link']}>
              <Icon type="user" /> 
              <span> 
                {LocalStorage.get('RAS-username') }
              </span> 
            </span>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;