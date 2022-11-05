const Splitwise = require('splitwise')


const sw = Splitwise({
    consumerKey: process.env.consumerKey || "5iPo9JCJ4d5lH8d021J13m6d3FfpTgz5oXrDBhry",
    consumerSecret: process.env.consumerSecret || "gOUTWPheEywjdNKw5Eu689Mk7PnuMjn2q96AUeo9"
  })


module.exports = sw