const { response } = require('express')
const coursesServices = require('../services/courses.service')

module.exports.list = (req, res, next) => {
    coursesServices.getCourses()
        .then(response => {
            res.render('courses', { courses: response.data })
        })
        .catch(next)
}

module.exports.get = (req, res, next) => {
    coursesServices.getCourse(req.params.id)
        .then( response => {
            res.render('courseDetail', { course: response.data })
        })
        .catch(next)
}

//Create
 module.exports.create = (req, res, next) => {
    res.render('newCourse')
} 

 module.exports.doCreate = (req, res, next) => {
    coursesServices.createCourse(req.body)
        .then((response) => {
            res.redirect('/courses')
        })
        .catch(next)
} 

//update
module.exports.update = (req, res, next) => {
    coursesServices.getCourse(req.params.id)
    .then( response => {
        res.render('updateCourse', { course: response.data })
    })
    .catch(next)
}

module.exports.doUpdate = (req, res, next) => {
    coursesServices.updateCourse(req.params.id, req.body)
        .then((response) => {
            res.redirect('/courses')
        })
        .catch(next)
}