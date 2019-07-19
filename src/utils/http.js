import { message } from 'antd';
import axios from 'axios';

const request = (config) => {
  return axios.request(config).then((res) => {
    return res.data;
  }).then((resJson) => {
    if (resJson.status !== "success") {
      // 后台自定义错误
      message.error(resJson.message);
      if(resJson.code === 401){
        window.location = "/signin"
      }
    } 
    return resJson;
  }).catch(() => {
    // http请求错误 
    message.error('请求失败，请检查网络或联系管理员!');
  });
};


// GET请求
export const get = (url) => {
  return request({
    url,
    method: 'GET'
  });
};

// POST请求
export const post = (url, data) => {
  return request({
    url,
    data,
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
};