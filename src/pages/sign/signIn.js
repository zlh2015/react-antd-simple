import React from 'react';
import { Layout, Input, Checkbox, Icon, Button, Form } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { signIn } from './actions';
import logo from '../../assets/images/leaf_logo.svg';
import styles from './signin.module.css';

const { Header, Content, Footer} = Layout;


const SignInPage = (props) => {
  const { form, onSignIn, signining: { loading, result } } = props;
  const formItemLayout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVal = {
        ...fieldsValue,
      };
      if(onSignIn){
        onSignIn(formVal);
      }
    });
  }

  return (
    <Layout>
      <Header className={styles.header}>
        <a href="/">
          <img src={logo} alt="react antd simple" />
          <span>React antd simple</span>
        </a>
      </Header>
      <Content className={styles.content}>
        <div className={styles['full-width']}>
          <Form {...formItemLayout} onSubmit={handleSubmit} className={styles.form} >
            <img src={logo} alt="" />
            <h3>登录 XXRAS</h3>
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
                />)
              }
            </Form.Item>
            <Form.Item>
              <Checkbox className={styles['form-signin-check']}>记住</Checkbox>
              <a className={styles['form-signin-link']} href="/signup">注册</a>
              <Button type="primary" htmlType="submit" loading={loading} className={styles['form-signin-btn']}>
                登录
              </Button>
              {/* <a href="/">注册</a> */}
              {
                result && result.status === "success" ?
                  <Redirect  to='/home'  exact={true} />
                :
                  null
              }
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer className={styles.footer}>
        <span>版权所有 © HG有限公司 2019</span>
      </Footer>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  const { sign: { signining } } = state;
  return {
    signining,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (formVal) => {
      dispatch(signIn(formVal));
    },
  }
}

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(
    Form.create()(SignInPage) 
  )
);
