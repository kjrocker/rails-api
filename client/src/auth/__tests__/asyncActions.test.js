import * as actions from '../actions'
import * as types from '../actionTypes'
import LocalStorageMock from '../../helpers/localStorageMock'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

global.localStorage = new LocalStorageMock

const mockStore = configureMockStore([thunk])

describe('loginUser', () => {
  const requestBody = {
    auth: {
      email: 'abc@example.com',
      password: 'password'
    }
  }

  afterEach(() => {
    fetchMock.restore()
  })

  it('should dispatch request and success', () => {
    const response = {
      body: {
        user: 'example_user',
        jwt: 'example_jwt'
      }
    }
    fetchMock.post('*', response)

    const expectedActionTypes = [types.LOGIN_USER_REQUEST, types.LOGIN_USER_SUCCESS]
    const store = mockStore({ auth: {} })

    return store.dispatch(actions.loginUser(requestBody)).then(() =>
      expect(store.getActions().map(a => a.type)).toEqual(expect.arrayContaining(expectedActionTypes))
    )
  })

  it('should dispatch request and failure', () => {
    const error = {
      status: 500
    }
    fetchMock.post('*', error)

    const expectedActions = [types.LOGIN_USER_REQUEST, types.LOGIN_USER_FAILURE]
    const store = mockStore({ auth: {}})

    return store.dispatch(actions.loginUser(requestBody)).then(() =>
      expect(store.getActions().map(a => a.type)).toEqual(expect.arrayContaining(expectedActions))
    )
  })
})
