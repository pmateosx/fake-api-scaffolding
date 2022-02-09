const httpClient = axios.create({
    baseURL: 'http://localhost:8000/courses'
})

const deleteCourse = (id) => httpClient.delete(`/${id}`)
    .then(() => {
        document.getElementById(`course-${id}`).remove()
    })
    .catch(next)

document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = (event) => {
        deleteCourse(event.target.value)
    }
})