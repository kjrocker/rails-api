import React from 'react';
import { mount, shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'redux';

import providerMock from '../../helpers/providerMock'
import LoginWrapper from '../loginWrapper';

const mockStore = configureStore([])

describe('(Component) LoginForm', () => {
  it('renders unauthenticated without exploding', () => {
    const store = mockStore({ auth: { isAuthenticated: false } })
    const LoginWithStore = providerMock(store)(LoginWrapper)
    const wrapper = mount(<LoginWithStore/>)
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('renders authenticated without exploding', () => {
    const store = mockStore({ auth: { isAuthenticated: true } })
    const LoginWithStore = providerMock(store)(LoginWrapper)
    const wrapper = mount(<LoginWithStore/>)
    expect(wrapper.find('form').length).toEqual(0)
    expect(wrapper.find('p').length).toEqual(1)
  })
})
