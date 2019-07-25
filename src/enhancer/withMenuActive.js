import React from 'react';
import { GlobalConsumer } from "../Context";

const getCurrentKey = (mt, path) => {
  if(!path){
    return "home";
  }
  let newPath = path;
  const pathSplit = newPath.split("/");
  let currentItem;
  for(let index in pathSplit){
    newPath = pathSplit.slice(0, pathSplit.length - index).join("/");
    currentItem = mt.getItemByPath(newPath);
    if(currentItem !== undefined){
      break;
    }
  } 
  if(currentItem){
    return currentItem.key ? currentItem.key : 'home';
  }else{
    return 'home'
  }
}

const withMenuActive = Component => props => {
  return <GlobalConsumer>
    {
      ({mt}) => {
        const currentKey = getCurrentKey(mt, props.path);
        const menuItems = mt.getItemByKey("root").children;
        return <Component {...props} menu={menuItems} current={currentKey} />
      }
    }
  </GlobalConsumer>
}

export default withMenuActive;