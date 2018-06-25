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
  signup: (firstname, lastname, email, password, hasCode, code) => {
    const signupData = require('../Fixtures/signup.json')
    return signupData;
  }, 
  getUser: (token) => {
    const signupData = require('../Fixtures/fetchUser.json')
    return signupData;
  },
}
