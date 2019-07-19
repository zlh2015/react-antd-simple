import * as Http from '../utils/http';

export const signIn = (payload) => {
  return Http.post('/api/signin', payload); 
}

export const signUp = (payload) => {
  return Http.post('/api/signup', payload); 
}

export const signOut = () => {
  return Http.get('/api/signout'); 
}