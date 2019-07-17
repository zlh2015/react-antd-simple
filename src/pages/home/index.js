import React from 'react';
import { Button } from 'antd';
import { post } from '../../utils/http';

const HomePage = () => {
  const handleClick = () => {
     post('/api/login',{username: "aa", password: "bb"}); 
  }
  return (
    <div>
        <h1>home page</h1>
        <Button type='primary' onClick={handleClick}>button </Button>
    </div>
  );
}

export default HomePage;