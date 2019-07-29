import ViewerPage from './viewer';
import MailPage from './mail';
import withThCcLayout from '../../enhancer/withLayout'

const WithThCcLayoutViewerPage = withThCcLayout(ViewerPage);


export {
  MailPage,
  ViewerPage,
  WithThCcLayoutViewerPage
} 