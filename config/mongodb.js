const mongoose  = require('mongoose');
const UserModel = require('../model/userModel');

try {
    console.log('----++++----', process.env.DB_URL)
    mongoose.connect(process.env.DB_URL);
}
catch(err) {
    console.log(err);
}

exports.UserModel = UserModel.compile(mongoose);
