import React from 'react';
import { Route } from 'react-router-dom';

const menuTranslater = (menu) => {
  let pathMap = {};
  let keyMap = {};
  if(!menu){
    return {};
  }
 
  const mapper = (key, data) => {
    data.map((item) => {
      if(item.children){
        mapper(item.key, item.children);
      }else{ 
        if(item.path){
          pathMap[item.path] = Object.assign({}, item);
        }
        if(key){
          keyMap[key + "." + item.key] = Object.assign({}, item);
        }else{
          keyMap[item.key] = Object.assign({}, item);
        }
      }
      return null;
    });
  }

  mapper("", menu);
  console.log(pathMap, keyMap);
  return {
    getItemByKey: (key) => {
      return keyMap[key];
    },
    getItemByPath: (path) => {
      return keyMap[path];
    },
    getRouteByKey: (key) => {
      const children = keyMap[key].children;
      if(!children) return null;
      return children.map((item) => {
        return (
          <Route path={item.path} component={item.component}></Route>   
        )
      });
    },
    getRouteByPath: (path) => {
      const children = pathMap[path].children;
      if(!children) return null;
      return children.map((item) => {
        return (
          <Route path={item.path} component={item.component}></Route>   
        )
      });
    }
  }
}

export default menuTranslater;