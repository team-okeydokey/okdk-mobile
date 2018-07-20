export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  login: (email, password) => {
    const loginData = require('../Fixtures/login.json')
    return loginData;
  },
  signup: (email, password1, password2) => {
    const signupData = require('../Fixtures/signup.json')
    return signupData;
  }, 
  getUser: (token) => {
    const userData = require('../Fixtures/getUser.json')
    return userData;
  },

  open: () => {
    const success = require('../Fixtures/open.json')
    return success;
  },

  resetPw: () => {
    const success = require('../Fixtures/resetPw.json')
    return success;
  },
}
