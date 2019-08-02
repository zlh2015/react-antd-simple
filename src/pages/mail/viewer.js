import React, { useState } from 'react';
import { Menu, Tree, Input, List, Tag, DatePicker, Dropdown, Button, Icon } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { MailList } from "../../components/mailList";
import { AutoFixedIframe } from "../../components/iframe";
import styles from './viewer.module.css';

const { Search } = Input;
const { RangePicker } = DatePicker;
const TreeNode = Tree.TreeNode;

const ViewerPage = (props) => {
  const allFields = ['sender','receiver','header','body','subject'];
  const [searchFields, setSearchFields] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [moreVisible, setMoreVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  let inputRef = null;
  const data = props.data || ["11","22"];

  const addSearchField = (field) => {
    if(field && !searchFields.includes(field)){
      setSearchFields(searchFields.concat([field]));
    }
  }

  const reomveSearchField = (e, field) => {
    e && e.preventDefault();
    if(field && searchFields.includes(field)){
      setSearchFields(searchFields.filter(i => i !== field));
    }
  }

  const addKeyword = () => {
    if(inputValue && !keywords.includes(inputValue)){
      setKeywords(keywords.concat([inputValue]));
    }
    setInputValue(''); 
    setInputVisible(false);
  }
  
  const reomveKeyword = (e, keyword) => {
    e && e.preventDefault();
    if(keyword && keywords.includes(keyword)){
      setKeywords(keywords.filter(i => i !== keyword));
    }
  }

  const getFieldMenu = () => {
    return <Menu>
      {
        allFields.filter(i => {
          return !searchFields.includes(i);
        }).map(item => {
          return <Menu.Item key={item} onClick={() => addSearchField(item)}>
            <span>{item}</span>
          </Menu.Item>
        })
      }
    </Menu>
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }  
  
  const showInput = () => {
    setInputVisible(true);
    inputRef && inputRef.focus()
  };

  const showMore = () => {
    setMoreVisible(true);
  }

  const hideMore = () => {
    setMoreVisible(false);
  }

  const saveInputRef = (ref) => {
    inputRef = ref;
  }

  return (
    <div className={styles["viewer-box"]}>
      <div className={styles["viewer-folder"]}>
        <div className={styles["viewer-container-header"]}>
          文件夹 
        </div>
        <div className={styles["viewer-container-body"]}>
          <Scrollbars className={"freescroll11"}>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            // onSelect={this.onSelect}
            // onCheck={this.onCheck}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
              </TreeNode>
            </TreeNode>
          </Tree>
          </Scrollbars>
        </div>
      </div>
      <div className={styles["viewer-explorer"]}>
        <div className={styles["viewer-explorer-header"]}>
          { !moreVisible ?
          <div className={styles["viewer-explorer-header-base"]}>
            <Search
              style={{width: '36%', minWidth: '280px', fontSize: '0.9em'}}
              placeholder="关键词"
              enterButton="检&nbsp;&nbsp;索"
              size="small"
              onSearch={value => console.log(value)}
            />
            <Button size="small" onClick={showMore} style={{marginLeft: '2em'}}>高级检索</Button>
          </div> 
          :
          <div className={styles["viewer-explorer-header-more"]}>
            <div className={styles["viewer-container-header"]}>
              高级检索 
              <span className={styles["viewer-explorer-header-more-close"]} >
                <Button
                  type="danger" 
                  size="small" 
                  shape="circle" 
                  icon="close" 
                  title="退出高级检索"
                  onClick={hideMore} />
              </span>
              
            </div>
            <div className={styles["viewer-explorer-header-more-item"]}>
              <Tag color="#1890ff">时间范围</Tag>
              <RangePicker
                size='small'
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                onChange={() => { console.log("") }}
              />
            </div>
            <Button className={styles["viewer-explorer-header-more-search"]} 
              type="primary" 
              size="large" 
              shape="circle" 
              icon="search" 
              title="开始检索"
            />
            <div className={styles["viewer-explorer-header-more-item"]}>
              <Tag color="#1890ff" style={{marginTop: '0.5em'}} >检索字段</Tag>
              {
                searchFields.map(field => {
                  return <Tag color="blue" style={{marginTop: '0.5em'}} closable onClose={(e) => reomveSearchField(e, field)}>
                    {field}
                  </Tag>;
                })
              }
              <Dropdown overlay={getFieldMenu()} trigger={['click']}>
                <Tag className="ant-dropdown-link" color='green' title="添加检索字段" style={{borderStyle: 'dashed', marginTop: '0.5em' }}>
                  添加 <Icon type="plus" />
                </Tag>
              </Dropdown>
            </div>

            <div className={styles["viewer-explorer-header-more-item"]}>
              <Tag color="#1890ff" style={{marginTop: '0.5em'}} >关键词</Tag>
              {
                keywords.map(keyword => {
                  return <Tag color="blue" style={{marginTop: '0.5em'}} closable onClose={(e) => reomveKeyword(e, keyword)}>
                    {keyword}
                  </Tag>;
                })
              }
               {inputVisible && (
                <Input
                  ref={saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={addKeyword}
                  onPressEnter={addKeyword}
                />
              )}
              {!inputVisible && (
                <Tag onClick={showInput} color="green" title="添加关键词" style={{borderStyle: 'dashed', marginTop: '0.5em' }}>
                  添加<Icon type="plus" /> 
                </Tag>
              )}
              
            </div>
          </div> 
          }
        </div>
        <div className={styles["viewer-explorer-body"]}>
          <div className={styles["viewer-explorer-body-list"]}>
            <MailList data={data}>
            </MailList>
          </div>
          <div className={styles["viewer-explorer-body-content"]}>
            <div className={styles["viewer-explorer-body-content-header"]}>
              <div className={styles["viewer-explorer-body-content-header-action"]}>
              </div>
              <div className={styles["viewer-explorer-body-content-header-item"]}>
                <div className={styles["viewer-explorer-body-content-header-item-left"]}>
                  <Tag>主题</Tag>
                </div>
                <div className={styles["viewer-explorer-body-content-header-item-right"]}>
                  <span>主题1111</span>
                </div>
              </div>
              <div className={styles["viewer-explorer-body-content-header-item"]}>
                <div className={styles["viewer-explorer-body-content-header-item-left"]}>
                  <Tag>发信人</Tag>
                </div>
                <div className={styles["viewer-explorer-body-content-header-item-right"]}>
                  <span>2231@163.com</span>
                </div>
              </div>
              <div className={styles["viewer-explorer-body-content-header-item"]}>
                <div className={styles["viewer-explorer-body-content-header-item-left"]}>
                  <Tag>收信人</Tag>
                </div>
                <div className={styles["viewer-explorer-body-content-header-item-right"]}>
                  <span>2231@163.com</span>
                </div>
              </div>
              <div className={styles["viewer-explorer-body-content-header-item"]}>
                <div className={styles["viewer-explorer-body-content-header-item-left"]}>
                  <Tag>时间</Tag>
                </div>
                <div className={styles["viewer-explorer-body-content-header-item-right"]}>
                  <span>2019-08-01 00:00:00</span>
                </div>
              </div>
            </div>
            <div className={styles["viewer-explorer-body-content-body"]}>
              <AutoFixedIframe src="ifram.test.html"></AutoFixedIframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewerPage;