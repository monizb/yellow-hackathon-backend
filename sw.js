const Splitwise = require('splitwise')


const sw = Splitwise({
    consumerKey: process.env.consumerKey,
    consumerSecret: process.env.consumerSecret
  })


module.exports = sw
