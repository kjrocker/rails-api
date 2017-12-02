import { push } from 'react-router-redux';

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// Higher Order function for producing HTTP requests
// from form objects given to us by Redux-Form, using
// different HTTP methods as needed.
const formRequest = (method) => (form, token) => {
  return {
    method: method,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(form)
  }
}

const postFormRequest = formRequest('post')

// Take an action, return a function that takes the same arguments, passes
// those arguments to the given action, and then dispatches a page redirect.
function addRedirect(action, redirect) {
  return function(...args) {
    return function(dispatch) {
      dispatch(action(...args))
      dispatch(push(redirect))
    }
  }
}

// AJAX Wrapper. Fetches an endpoint, with a request, and dispatches
// the specified actions through the reducer on request start, request
// success, and request failure. Passes the response and error into the
// success and failure actions, respectively.
function genericAJAX(endpoint, request, { start, succeed, fail }) {
  return function(dispatch) {
    dispatch(start(request))
    return fetch(endpoint, request)
      .then(checkHttpStatus)
      .then(r => r.json())
      .then(r => dispatch(succeed(r)))
      .catch(e => dispatch(fail(e)))
  }
}

export {
  genericAJAX,
  formRequest,
  postFormRequest,
  addRedirect
};
