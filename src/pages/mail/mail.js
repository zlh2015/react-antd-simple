import React from 'react';
import { Switch } from 'react-router-dom';
import { GlobalConsumer } from '../../Context';

const MailPage = (props) => {
  const path = props.path ? props.path : "/mail";
  return (
    <GlobalConsumer>
    {
      ({mt}) => {
        return (
          <Switch>
            { mt.getRedirectByPath(path)}
            { mt.getRouteByPath(path)} 
          </Switch>
        );
      }
    }
    </GlobalConsumer>
  );
}

export default MailPage;