import React, { Component as ReactComponent } from 'react';
import { actions } from "../pages/sign";

const WithSignOutPage = Component => (

  class WithSignOut extends ReactComponent{

    componentDidMount(){
      const { dispatch } = this.props;
      dispatch(actions.signOut());
    }

    render(){
      return <Component {...this.props} />;
    }

  } 

)

export default WithSignOutPage;