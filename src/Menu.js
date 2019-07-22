import { signInPage, signUpPage, signOutPage} from './pages/sign';

const menuData = {
  "key": "/",
  "label": "平台",
  "path": "/",
  "menu": false,
  "component": null,
  "children": [
    {
      "icon": "home",
      "key": "signin",
      "label": "登陆",
      "path": "/sigin",
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
      "component": null,
    }, 
    {
      "icon": "mail",
      "key": "mail",
      "label": "电子邮件",
      "path": "/mail",
      "menu": true,
      "component": null,
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
      "icon": "staging",
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