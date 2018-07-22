// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"

const create = (baseURL = 'http://18.220.28.85:5000') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  // User authentication api.
  const login = (email, password) => api.post('/auth/login', {email: email, password: password});

  const signup = (email, password1, password2, signupCode) => api.post('/auth/signup', {email: email, pw1: password1, pw2: password2, signup_code: signupCode});

  // Device manipulation api.
  const open = (token) => api.get('/api/v1/open', {}, {headers: {"x-access-token": token, "type": "guest"}});
  
  const resetPw = (token, newPw) => api.post('/api/v1/reset-pw', {newPw: newPw}, {headers: {"x-access-token": token}});

  const shareKey = (token, email) => api.post('/api/v1/share-key', {}, {headers: {"x-access-token": token, "email": email, "type": "guest"}});

  const getAccessLogs = (roomId) => api.get('/api/v1/get-access-logs', {room_id: roomId})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
    login,
    signup,
    open,
    resetPw,
    shareKey, 
    getAccessLogs
  }
}

// let's return back our create method as the default.
export default {
  create
}
