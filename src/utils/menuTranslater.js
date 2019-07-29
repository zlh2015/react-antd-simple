import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuthenticated } from './auth';

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
    getRedirectByPath: (path) => {
      return path && pathMap[path] && pathMap[path].redirect ?
        checkAuthenticated() ? 
          <Redirect key={pathMap[path].key} from={pathMap[path].path} to={pathMap[path].redirect}  exact={true} />
          : 
          <Redirect key={pathMap[path].key} from={pathMap[path].path} to='/signin'  exact={true} />
        :
        null;
    },
    getRouteByPath: (path) => {
      return path && pathMap[path] && pathMap[path].children ?
        pathMap[path].children.map(
          (item) => {
            return item.component ? 
              <Route key={item.key} path={item.path} component={item.component} exact={item.exact ? true : false} />
              :
              null
          }
        )
        :
        null;
    }
  }
}

export default menuTranslater;