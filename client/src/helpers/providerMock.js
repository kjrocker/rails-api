import React from 'react'
import { Provider } from 'react-redux'

const providerMock = (store) => (BaseComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <BaseComponent {...this.props}/>
        </Provider>
      )
    }
  }
}

export default providerMock;
