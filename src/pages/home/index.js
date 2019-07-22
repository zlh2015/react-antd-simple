import React from 'react';
import { Button } from 'antd';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
        <h1>home page</h1>
        <Button type='primary'>button </Button>
    </div>
  );
}

export default HomePage;