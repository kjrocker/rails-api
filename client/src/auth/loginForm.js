import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react'

import { loginUser } from './actions';

class LoginForm extends Component {
  login = (values) => {
    const redirectRoute = this.props.redirect || '/'
    this.props.actions.loginUser(values, redirectRoute)
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit(this.login)}>
        <Form.Field>
          <label htmlFor="auth[email]">Email</label>
          <Field name="auth[email]" component="input" type="text"/>
        </Form.Field>
        <Form.Field>
          <label htmlFor="auth[password]">Password</label>
          <Field name="auth[password]" component="input" type="password"/>
        </Form.Field>
        <Button primary type="submit">Login</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loginUser }, dispatch)
})

const mapStateToProps = (state) => ({
  redirect: state.routing.locationBeforeTransitions.query.next
})

const loginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default reduxForm({ form: 'login' })(loginForm)
