var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://Jayant:Jayant@ds149501.mlab.com:49501/todoapp'
};

mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(db.mlab || db.localhost);
module.exports = {
  mongoose
}
