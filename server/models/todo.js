var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false

  },
  completedAt: {
    type: Number,
    default: null

  },
  _creator:{
    
    type:mongoose.Schema.Types.ObjectId,
    require:true
  }
});

module.exports = {Todo};
//  To insert new todo
// var newTodo = new Todo({
//   text: 23
//
// });
// newTodo.save().then((doc) => {
//   console.log('Saved Todo',doc);
// },(e) => {
//   console.log('Unable to save Todo',e);
//
// });
