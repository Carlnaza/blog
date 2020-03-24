module.exports = require('mongoose').connect('mongodb://localhost/blogdb', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  