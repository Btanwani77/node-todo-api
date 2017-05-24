var env = process.env.NODE_ENV || 'development';


if(env === 'development') {
  process.env.PORT = 3000;
  // process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
  process.env.MONGODB_URI = 'mongodb://Jayant:Jayant@ds149501.mlab.com:49501/todoapp';
} else if(env === 'test') {
  process.env.PORT = 4000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';


}
