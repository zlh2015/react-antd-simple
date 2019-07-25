import React from 'react';
import { ThCcBfLayout } from '../components/layouts';

const WithThCcBfLayout = Component => props => {
  return <ThCcBfLayout {...props}>
    <Component {...props} />
  </ThCcBfLayout> 
}

export default WithThCcBfLayout;