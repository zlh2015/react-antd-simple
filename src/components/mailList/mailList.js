import React from 'react';
import { List, Menu, Checkbox, Dropdown, Icon, Button } from 'antd';
import styles from './mailList.module.css';

const MailItem = (props) => {
  const item = props.item;
  return (
    <div className={styles["item-box"]}>
      <div className={styles["item-box-left"]}>
        <Checkbox></Checkbox>
      </div>
      <div className={styles["item-box-content"]}>
        <div className={styles["item-box-content-top"]}>
          <div className={styles["item-box-content-top-subject"]}>
            {item}
          </div>
          <div className={styles["item-box-content-top-datetime"]}>
            2019-07-07 09:09:00
          </div>
        </div>
        <div className={styles["item-box-content-middle"]}>
          <div className={styles["item-box-content-middle-sender"]}>
            abc
          </div>
          <div className={styles["item-box-content-middle-tags"]}>
          </div>
        </div>
        <div className={styles["item-box-content-bottom"]}>
          <div className={styles["item-box-content-bottom-match"]}>
          </div>
          <div className={styles["item-box-content-bottom-actions"]}>
            hhh
          </div>
        </div>
      </div>
    </div>
  );
}

const MailList = (props) => {
  const data = props.data;
  const sortMenu = (
    <Menu>
      <Menu.SubMenu key="sender" title="发信人">
        <Menu.Item key="sender.asc">升序</Menu.Item>
        <Menu.Item key="sender.desc">降序</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="subject" title="主题">
        <Menu.Item key="subject.asc">升序</Menu.Item>
        <Menu.Item key="subject.desc">降序</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="auto">匹配度</Menu.Item>
    </Menu>
  )
  return (
    <div>
      <div className={styles["tool-bar"]}>
        <div className={styles["tool-bar-left"]}>
          <Checkbox></Checkbox>
        </div>
        <div className={styles["tool-bar-right"]}>
          <Dropdown overlay={sortMenu}>
            <Button size="small">排序<Icon type="down" /></Button>
          </Dropdown>
        </div>
      </div>
      <List
        className={styles["mail-list"]}
        size={"small"}
        dataSource={data}
        split={true}
        // bordered
        renderItem={(item) => <MailItem item={item}></MailItem>}
      >
      </List>
    </div>
  )

};

export default MailList;