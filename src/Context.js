import React from 'react';

const GlobalContext = React.createContext()
const GlobalProvider = GlobalContext.Provider;
const RouteComsumer = (props) =>{
  console.log('route',props);
  const path = props.path ? props.path : props;
  return (
    <GlobalContext.Consumer>
      {
        ({mt}) => {
          return (
            <div>
              {
                mt.getRouteByPath(path)
              } 
              {
                mt.getRedirect()
              }
            </div>
          );
        }
      }
    </GlobalContext.Consumer>
  );

};


export {
  GlobalProvider,
  RouteComsumer
};