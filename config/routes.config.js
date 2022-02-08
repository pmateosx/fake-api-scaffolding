const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses.controller')

router.get('/', (req, res, next) => {
  res.render('index')
})

//Courses
router.get('/courses', coursesController.list)
router.get('/courses/new', coursesController.create)

module.exports = router;