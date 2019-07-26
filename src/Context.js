import React from 'react';

const GlobalContext = React.createContext()
const GlobalProvider = GlobalContext.Provider;
const GlobalConsumer = GlobalContext.Consumer;

export {
  GlobalProvider,
  GlobalConsumer
};