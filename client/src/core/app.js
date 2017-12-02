import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Button } from 'semantic-ui-react'

import { LoginButton } from '../auth'
import NavBar from './navbar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
