
import { signInPage, signUpPage, signOutPage} from './pages/sign';
import { WithThCcLayoutHomePage } from './pages/home';

const menuData = {
  "key": "root",
  "label": "平台",
  "path": "/",
  "menu": false,
  "component": null,
  "redirect": '/home',
  "children": [
    {
      "icon": "home",
      "key": "signin",
      "label": "登陆",
      "path": "/signin",
      "menu": false,
      "component": signInPage,
    }, 
    {
      "icon": "home",
      "key": "signup",
      "label": "主页",
      "path": "/signup",
      "menu": false, 
      "component": signUpPage,
    }, 
    {
      "icon": "home",
      "key": "signout",
      "label": "主页",
      "path": "/signout",
      "menu": false,
      "component": signOutPage,
    }, 
    {
      "icon": "home",
      "key": "home",
      "label": "主页",
      "path": "/home",
      "menu": true,
      "component": WithThCcLayoutHomePage,
    }, 
    {
      "icon": "mail",
      "key": "mail",
      "label": "电子邮件",
      "path": "/mail",
      "menu": true,
      "component": null,
      "redirect": '/mail/viewer',
      "children" :[
        {
          "icon": "",
          "key": "mail-viewer",
          "label": "邮件浏览",
          "path": "/mail/viewer",
          "menu": true,
          "component": null,
        },
        {
          "icon": "",
          "key": "mail-analyzer",
          "label": "邮件分析",
          "path": "/mail/analyzer",
          "menu": true,
          "component": null,
        }
      ]
    },
    {
      "icon": "laptop",
      "key": "staging",
      "label": "工作台",
      "path": "/staging",
      "menu": true
    },
    {
      "icon": "setting",
      "key": "setting",
      "label": "设置",
      "path": "/setting",
      "menu": true
    }
  ]
}

export default menuData;