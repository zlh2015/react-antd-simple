import React from 'react';
import { ThCcLayout } from '../components/layouts';

const WithThCcLayout = Component => props => {
  return <ThCcLayout {...props}>
    <Component {...props} />
  </ThCcLayout> 
}

export default WithThCcLayout;