import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const menuTranslater = (menu) => {
  let pathMap = {};
  let keyMap = {};
 
  const mapper = (data) => {
    data.map((item) => {
      keyMap[item.key] = Object.assign({}, item);
      if(item.path){
        pathMap[item.path] = Object.assign({}, item);
      }
      if(item.children){
        mapper(item.children);
      } 
      return item;
    });
  }

  mapper([menu]);
  console.log(pathMap, keyMap);
  return {
    update: (data) => {
      pathMap = {};
      keyMap = {};
      mapper([data]);
    },
    getItemByKey: (key) => {
      return keyMap[key];
    },
    getItemByPath: (path) => {
      return pathMap[path];
    },
    getRedirect: () => {
      return null;
      // return redirect; 
    },
    getRouteByPath: (path) => {
      return path && pathMap[path] && pathMap[path].children ?
        pathMap[path].children.map(
          (item) => {
            return <Route path={item.path} component={item.component ? item.component : null} exact={item.exact ? true : false} />
          }
        )
        :
        null
      }
  }
}

export default menuTranslater;