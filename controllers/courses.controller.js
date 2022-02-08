const coursesServices = require('../services/courses.service')

module.exports.list = (req, res, next) => {
    coursesServices.getCourses()
        .then(response => {
            console.log(response)
            res.render('courses', { courses: response.data })
        })
        .catch(next)
}

//Create
module.exports.create = (req, res, next) => {
    res.render('newCourse')
}

module.exports.doCreate = (req, res, next) => {
    coursesServices.createCourse(req.body)
}