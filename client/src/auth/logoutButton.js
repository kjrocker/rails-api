import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logoutUser } from './actions'

const logoutButton = (props) => {
  return (<a onClick={() => props.actions.logoutUser()}>Logout</a>)
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logoutUser }, dispatch)
});

export default connect(null, mapDispatchToProps)(logoutButton)
