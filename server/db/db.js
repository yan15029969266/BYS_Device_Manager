module.exports = app => {
  const mongoose = require('mongoose')
  //const mongoose = require('mongodb').MongoClient;
  mongoose.connect('mongodb://localhost:27017/bysDeviceManger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    console.log("数据库已链接!");
  })
  const models = require('require-all')(__dirname + '/../models')
  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function () {
  //   // we're connected!
  //   console.log("-------------")
  // });
}