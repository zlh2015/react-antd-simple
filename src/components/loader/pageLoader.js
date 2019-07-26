import React from 'react';
import { Spin } from 'antd';
import styles from './pageLoader.module.css';

const pageLoader = (props) => {
  if(props.error){
    return (
      <div className={styles['loader-wrapper']}>
        <div className={styles['loader-content']}>
          <h2>页面加载失败！</h2>
          <span>请检查网络链接情况！</span>
        </div>
      </div>
    );
  }else if(props.pastDelay){
    return (
      <div className={styles['loader-wrapper']}>
        <div className={styles['loader-content']}>
            <Spin 
              delay={props.delay ? props.delay : '-'}
              size={props.size ? props.size : 'large'} 
              tip={props.tip ? props.tip : ''}
              />
      </div>
    </div>
    );
  }else{
    return null;
  };
};

export default pageLoader;