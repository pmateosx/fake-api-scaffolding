const httpClient = require('./base.service')

const getCourses = () =>  httpClient.get('/courses')
const getCourse = (courseId) => httpClient.get(`/course/${courseId}`)
const createCourse = (data) => httpClient.get('/courses', data)
const deleteCourse = (courseId) => httpClient.get(`/courses/${courseId}`)

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse
}