const httpClient = require('./base.service')

const getCourses = () =>  httpClient.get('/courses')
const getCourse = (courseId) => httpClient.get(`/courses/${courseId}`)
const createCourse = (data) => httpClient.post('/courses', data)
const updateCourse = (courseId, courseInfo) => httpClient.put(`/courses/${courseId}`, courseInfo)

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse
}