var mongoose = require('mongoose');
var ToDoModel = mongoose.model('ToDoModel');

exports.all_todo = function(req, res) {
    ToDoModel.find().then(function(err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });

};

exports.load_todo = function(req, res) {
    var date = req.params.date;

    if (date) {
        ToDoModel.find({date:date}, function(err, todo) {
            if (err) {
                res.send(err);
            } else {
                res.json(todo);
            }
        });
    } else {
        res.send(err);
    }
};


exports.create_todo = function(req, res) {
    var new_todo = new ToDoModel();

    new_todo.uid = req.body.uid;
    new_todo.date = req.body.date;
    new_todo.content = req.body.content;
    new_todo.done = req.body.done;

    new_todo.save(function(err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
}

exports.update_todo = function(req, res) {
    var _id = req.params.id;

    ToDoModel.findById(_id, function(err, todo) {
        if (err) {
            res.send(err);
        } else {
            todo.uid = req.body.uid;
            todo.date = req.body.date;
            todo.content = req.body.content;
            todo.done = req.body.done;

            todo.save(function(err, todo) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(todo);
                }
            });
        }
    });

}

exports.delete_todo = function(req, res) {
    var _id = req.params.id;
    
    ToDoModel.findById(_id, function(err, todo) {
        if (err) {
            res.send(err);
        } else {
            ToDoModel.deleteOne({_id:_id}).then(function() {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "Success!" });
                }
            });
        }
    });
}
