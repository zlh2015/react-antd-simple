import Header from './header';
import Sider from './sider'; 
import withMenuActive from '../../enhancer/withMenuActive';

const WithMenuActiveHeader = withMenuActive(Header);
const WithMenuActiveSider = withMenuActive(Sider);

export {
    Header,
    Sider,
    WithMenuActiveHeader,
    WithMenuActiveSider
}