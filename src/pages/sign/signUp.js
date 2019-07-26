import React from 'react';
import { Input, Button } from 'antd';
import * as Http from '../../utils/http';

const SignUpPage = () => {
  const handleClick = () => {
    Http.post('/api/login',{username: "aa", password: "bb"}); 
  }
  return (
    <div>
      <h1>sign up page</h1>
      <span>user</span> 
      <Input></Input>
      <span>pass</span> 
      <Input></Input>
      <Button type='primary' onClick={handleClick}> login </Button>
    </div>
  );
}

export default SignUpPage;
