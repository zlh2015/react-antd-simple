import React from 'react';
import { Spin } from 'antd';
import styles from './loader.module.css';

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
              // delay={200}
              size={'large'} />
      </div>
    </div>
    );
  }else{
    return null;
  };
};

export default pageLoader;