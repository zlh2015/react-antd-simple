import React, { useState } from 'react';
import { Layout, Input, Checkbox, Icon, Button, Form } from 'antd';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { signIn } from './actions';
import styles from './signin.module.css';

const { Header, Content, Footer} = Layout;


const SignInPage = (props) => {
  const { form, onSignIn } = props;
  const formItemLayout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 6 },
  };
  const handleSubmit = () => {
    const formVal = {a:"fff", b:"ggg"};
    if(onSignIn){
      onSignIn(formVal);
    }
  }

  return (
    <Layout>
      <Header className={styles.header}>
        <h1>signin page</h1>
      </Header>
      <Content className={styles.content}>
        <Form {...formItemLayout} onSubmit={handleSubmit} className={styles.form} >
          <h3>欢迎登录</h3>
          <Form.Item label="">
            {
              form.getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: "请输入用户名"
                }]
              })(<Input 
                    placeholder={'用户名'}
                    prefix={<Icon type='user' />}
                    size={'large'}
              />)
            }
          </Form.Item>
          <Form.Item label="">
            {
              form.getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: "请输入密码"
                }]
              })(<Input 
                    placeholder={'密码'}
                    type={'password'}
                    prefix={<Icon type='eye' />}
                    size={'large'}
              />)
            }
          </Form.Item>
          <Form.Item>
            <Checkbox>记住</Checkbox>
            <a className={styles['login-form-forgot']} href="/">忘记密码</a>
            <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
              登录
            </Button>
            {/* <a href="/">注册</a> */}
          </Form.Item>
        </Form>
      </Content>
      <Footer className={styles.footer}>
        <span>版权所有 © HG有限公司 2019</span>
      </Footer>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  const { sign } = state;
  return {
    sign,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (formVal) => {
      console.log("sssss");
      dispatch(signIn(formVal));
    },
  }
}

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(
    Form.create()(SignInPage) 
  )
);
