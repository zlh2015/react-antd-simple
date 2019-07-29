import React from 'react';
import styles from './viewer.module.css';

const ViewerPage = (props) => {
  return (
    <div className={styles["viewer-box"]}>
      <div className={styles["viewer-folder"]}>
        文件夹 
      </div>
      <div className={styles["viewer-explorer"]}>
        <div className={styles["viewer-explorer-header"]}>
          检索
        </div>
        <div className={styles["viewer-explorer-body"]}>
          <div className={styles["viewer-explorer-body-list"]}>
            邮件列表
          </div>
          <div className={styles["viewer-explorer-body-content"]}>
            <div className={styles["viewer-explorer-body-content-header"]}>
              邮件头
            </div>
            <div className={styles["viewer-explorer-body-content-body"]}>
              邮件内容
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewerPage;