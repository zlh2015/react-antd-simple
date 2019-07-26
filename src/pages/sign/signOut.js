import React from 'react';
import { pageLoader as PageLoader } from '../../components/loader';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { injectIntl } from 'react-intl'
import WithSignOutPage from '../../enhancer/withSignOut';

const SignOutPage = (props) => {
  const { signOuting: { loading, result} } = props;
    if(loading){
      return <PageLoader 
        error={false}
        pastDelay={true}
        size={'large'}
        tip={"正在登出系统！"} 
      ></PageLoader>
    }else{
      return result ? 
        result.status === "success" ? 
          <Redirect  to='/signin'  exact={true} />
        :
          <Redirect  to='/home'  exact={true} />
      :
      <PageLoader 
        error={false}
        pastDelay={true}
        size={'large'}
        tip={"正在登出系统！"} 
      ></PageLoader>
    }
}

const mapStateToProps = (state) => {
  const { sign: {signOuting} } = state;
  return {
    signOuting,
  };
};


export default injectIntl(
  connect(mapStateToProps, null)(
    WithSignOutPage(SignOutPage) 
  )
);
