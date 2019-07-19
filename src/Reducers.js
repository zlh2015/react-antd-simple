import { routerReducer } from 'react-router-redux';
import signReducer from './pages/sign/reducer';

export default {
    routing: routerReducer,
    sign: signReducer
}