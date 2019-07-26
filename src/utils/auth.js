import * as localStorage from "./localstorage"


const checkAuthenticated = () => {
  const username = localStorage.get("RAS-username");
  console.log(username);
  if(username === ""){
    return false;
  }else{
    return true;
  }
}

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

export {
  checkAuthenticated,
  checkAuthority
} 