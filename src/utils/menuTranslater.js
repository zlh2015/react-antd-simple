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

  const getRoute = (data, prePath) => {
    console.log(data.path, data.key);
    const routePath = prePath ? data.path.split(prePath)[1] : data.path;
    return (
      prePath === '/' ? 
      data.children ? data.children.map(item => getRoute(item, data.path)) : null
      :
      <Route path={routePath} component={data.component ? data.component : null} exact={data.exact ? data.exact : false} >
        {
          data.children ? data.children.map(item => getRoute(item, data.path)) : null
        }
      </Route>
    );
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
      console.log(getRoute(menu, path));
      return getRoute(menu, path);
    }
  }
}

export default menuTranslater;