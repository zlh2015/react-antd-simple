import * as localStorage from "./localstorage"


const checkAuthority = (api, method) => {
  const authority = localStorage.get("RAS-authority");
  console.log(authority);
  if(api && api in authority){
    if(method && authority[api].includes(method)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

export default checkAuthority;