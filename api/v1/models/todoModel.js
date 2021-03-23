var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var ToDoSchema = new Schema({
        uid: Number,
        date: String,
        content: String,
        done: Boolean
    },
    {
        versionKey: false,
        timestamps: true 
    }
);


module.exports = mongoose.model('ToDoModel', ToDoSchema);
