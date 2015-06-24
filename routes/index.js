var express = require('express');
var quizController = require('quiz_controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenido a Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author', function(req, res) {
	res.render('author', { title: 'Créditos', nombre: 'Patricia Fernández' });
});

module.exports = router;
