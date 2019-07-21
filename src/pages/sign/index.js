import Loadable from 'react-loadable';
import * as actions from './actions';
import * as sagas from './sagas';
import { pageLoader } from '../../components/loader';

const signInPage = Loadable({
    loader: () => import('./signIn'),
    loading: pageLoader,
    delay: 300, // default is 200ms
});

const signUpPage = Loadable({
    loader: () => import('./signUp'),
    loading: pageLoader
});

const signOutPage = Loadable({
    loader: () => import('./signOut'),
    loading: pageLoader
});

export {actions, sagas, signInPage, signUpPage, signOutPage};