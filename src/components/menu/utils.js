import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
const { SubMenu } = Menu;

const getMenuItems = (menuData) => {
  return menuData.filter(i => i.menu).map((item) => {
    if (item.children instanceof Array) {
      return (
        <SubMenu 
          key={item.key}
          title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}>
          {
            getMenuItems(item.children)
          }
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.path}>
            <Icon type={item.icon} /><span>{item.label}</span>
          </Link>
        </Menu.Item>
      )
    }
  })
}

export {
    getMenuItems
}