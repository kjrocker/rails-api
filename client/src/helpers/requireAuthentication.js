import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Redirect to login if something attempts to render BaseComponent and
// the user is at any point unauthenticated. Pass the login redirect
// the information it needs to come back to the route once authenticated.
export default function requireAuthentication(BaseComponent) {

  class AuthenticatedComponent extends Component {

    componentWillMount(){
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps){
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated){
      if (!isAuthenticated){
        const redirectAfterLogin = this.props.location.pathname
        this.props.dispatch(push(`/login?next=${redirectAfterLogin}`))
      }
    }

    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <BaseComponent {...this.props}/> : null }
        </div>
      )
    }
  }

  const mapStateToProps = ({ auth }) => ({
    token: auth.token,
    email: auth.email,
    isAuthenticated: auth.isAuthenticated,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
