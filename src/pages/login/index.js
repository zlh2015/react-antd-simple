import React from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
        <h1>login page</h1>
        <span>user</span> 
        <Input></Input>
        <span>pass</span> 
        <Input></Input>
        <Link to='/home'>
            <Button type='primary'> login </Button>
        </Link>
    </div>
  );
}

export default LoginPage;

