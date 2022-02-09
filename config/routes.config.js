const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses.controller')

router.get('/', (req, res, next) => {
  res.render('index')
})

//Courses
router.get('/courses', coursesController.list)
router.get('/courses/new', coursesController.create)
router.get('/courses/:id', coursesController.get)
router.post('/courses', coursesController.doCreate)
router.get('/courses/update/:id', coursesController.update)
router.post('/courses/update/:id', coursesController.doUpdate)


module.exports = router;