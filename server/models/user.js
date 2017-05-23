var mongoose = require('mongoose');
var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  }
});
module.exports = {User};

// to insert new user

// var newUser = new User({
//   email: ''
// });
// newUser.save().then((doc) => {
//   console.log('saved new user',doc);
// },(e) => {
//   console.log('unable to add new user: ',e);
// })
