import React, { Component } from 'react';

import { requireAuthentication } from '../helpers'

class ProtectedExample extends Component {
  render() {
    return (
      <div>
        You must be logged in to see this!
      </div>
    );
  }
}

export default requireAuthentication(ProtectedExample);
