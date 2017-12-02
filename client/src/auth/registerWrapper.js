import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatusBar from './statusBar'
import LoggedInMessage from './loggedInMessage'
import RegisterForm from './registerForm'

class RegisterWrapper extends Component {
  render() {
    const { statusText, isAuthenticated } = this.props;
    const ChildComponent = isAuthenticated ? <LoggedInMessage/> : <RegisterForm/>

    return (
      <div>
        <StatusBar text={statusText}/>
        { ChildComponent }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  statusText: state.auth.statusText
})

export default connect(mapStateToProps, null)(RegisterWrapper);
