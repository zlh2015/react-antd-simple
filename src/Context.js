import React from 'react';

const GlobalContext = React.createContext()
const GlobalProvider = GlobalContext.Provider;
const GlobalConsumer = GlobalContext.Consumer;
const RouteComsumer = (props) =>{
  const path = props.path ? props.path : "/";
  return (
    <GlobalContext.Consumer>
      {
        ({mt}) => {
          return (
            <div>
              { mt.getRouteByPath(path)} 
              { mt.getRedirect()}
            </div>
          );
        }
      }
    </GlobalContext.Consumer>
  );
};

const MenuComsumer = (props) =>{
  console.log("MenuComsumer", props);
  const path = props.path ? props.path : "/";
  return (
    <GlobalContext.Consumer>
      {
        ({mt}) => {
          return (
            <div>
            </div>
          );
        }
      }
    </GlobalContext.Consumer>
  );
};


export {
  GlobalProvider,
  GlobalConsumer,
  RouteComsumer,
  MenuComsumer
};