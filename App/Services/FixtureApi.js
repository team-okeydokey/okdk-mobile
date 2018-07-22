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

  open: (token) => {
    const success = require('../Fixtures/open.json')
    return success;
  },

  shareKey: (token, email) => {
    const success = require('../Fixtures/shareKey.json')
    return success;
  }
}
