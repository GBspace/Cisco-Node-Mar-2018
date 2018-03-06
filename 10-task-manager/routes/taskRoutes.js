var express = require('express');
var router = express.Router();

var list = [
	{id : 1, name : 'Learn JavaScript', isCompleted : false},
	{id : 2, name : 'Watch a movie', isCompleted : true}
];

router.get('/api', function(req, res, next){
	res.json(list);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	var viewData = { tasks : list };
  	res.render('tasks/index', viewData);
});

router.get('/add', function(req, res, next){
	res.render('tasks/add');
});

router.post('/add', function(req, res, next){
	var newTaskName = req.body.newTaskName,
		newTaskId = list.reduce(function(prevResult, task){
			return prevResult < task.id ? task.id : prevResult;
		}, 0) + 1,
		newTask = { id : newTaskId, name : newTaskName, isCompleted : false };
	list.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskToToggle = list.find(function(task){
		return task.id === parseInt(req.params.id);
	});
	if (taskToToggle){
		taskToToggle.isCompleted = !taskToToggle.isCompleted;
	}
	res.redirect('/tasks');
});

module.exports = router;
