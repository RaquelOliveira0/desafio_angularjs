const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true });