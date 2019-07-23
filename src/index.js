import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import * as LocaleMap from './locale'; 
import Store from './Store';
import menuData from './Menu';
import menuTranslater from './utils/menuTranslater';
import * as serviceWorker from './serviceWorker';
import  App from './App';
import './index.css';


addLocaleData([...en, ...zh]);
const mt = menuTranslater(menuData);

ReactDOM.render(
  <IntlProvider locale={LocaleMap.getLang()} messages={LocaleMap.getMessage()}>
    <Provider store={Store}>
      <BrowserRouter >
        {
            mt.getRoute()
        }
      </BrowserRouter> 
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
