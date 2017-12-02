import * as actions from '../actions'
import * as types from '../actionTypes'
import LocalStorageMock from '../../helpers/localStorageMock'

global.localStorage = new LocalStorageMock

describe('loginUserSuccess', () => {
  it('should contain user and token', () => {
    const token = 'example_token'
    const user = 'example_user'
    const expectedAction = {
      type: types.LOGIN_USER_SUCCESS,
      payload: { user, token }
    }
    expect(actions.loginUserSuccess({user, jwt: token})).toEqual(expectedAction)
  })

  it('should add token to storage', () => {
    const token = 'example_token'
    const user = 'example_user'
    actions.loginUserSuccess({ user, jwt: token})
    expect(localStorage.getItem('token')).toEqual(token)
  })
})

describe('loginUserFailure', () => {
  it('should contain error', () => {
    const error = 'example_error'
    const expectedAction = {
      type: types.LOGIN_USER_FAILURE,
      payload: { error }
    }
    expect(actions.loginUserFailure(error)).toEqual(expectedAction)
  })

  it('should remove token from storage', () => {
    localStorage.setItem('token', 'example_token')
    actions.loginUserFailure('example_error')
    expect(localStorage.getItem('token')).toEqual(null)
  })
})

describe('logoutUser', () => {
  it('should have correct type', () => {
    const expectedAction = {
      type: types.LOGOUT_USER
    }
    expect(actions.logoutUser()).toEqual(expectedAction)
  })
})

describe('loginUserRequest', () => {
  it('should have the correct type', () => {
    const expectedAction = {
      type: types.LOGIN_USER_REQUEST
    }
    expect(actions.loginUserRequest()).toEqual(expectedAction)
  })
})
