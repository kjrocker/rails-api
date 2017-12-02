import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './app'
import ProtectedComponent from './protectedExample'
import { LoginWrapper, RegisterWrapper } from '../auth';

const SimpleComponent = (props) => (<div> I'm a dummy component! </div>)

// Simplest Router. Home, login, register, and a page requiring login
const MyRouter = ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={SimpleComponent}/>
      <Route path='protected' component={ProtectedComponent}/>
      <Route path='login' component={LoginWrapper}/>
      <Route path='register' component={RegisterWrapper}/>
    </Route>
  </Router>
);

export default MyRouter;
