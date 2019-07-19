import zh_CN from "../locale/zh_CN"     
import en_US from "../locale/en_US"   

const LocaleMap = {
    zh: zh_CN,
    en: en_US
}

const getLang = (lang) => {
    const userLang = navigator.language || '';
    return lang || userLang.toLowerCase().substr(0, 2);
}

const getMessage = (lang) =>{
    const langauge = getLang(lang);
    return LocaleMap[langauge];
}

export {
    getLang,
    getMessage
}