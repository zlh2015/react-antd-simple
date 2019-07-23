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

  const getRoutes = (data, prePath) => {
    return data.children ? 
      data.children.map(item => {
        const routePath = prePath ? item.path.slice(prePath.length, item.path.length) : data.path;
        return <Route path={routePath} component={item.component}>
          {
            item.children ? getRoutes(item, item.path) : null

          }
          </Route>
      })
      :
      null;
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
    getRoute: () => {
      console.log(getRoutes(menu, ""));
      return getRoutes(menu, "");
    }
  }
}

export default menuTranslater;