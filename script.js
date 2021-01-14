function getTodos() {
    let todos = new Array
    let todos_str = localStorage.getItem('todo')
    if (todos_str !== null) {
        todos = JSON.parse(todos_str)
    }
    return todos
}

function addTask() {
    let task = document.getElementById('task').value
    let todos = getTodos()
    todos.push(task)
    localStorage.setItem('todo', JSON.stringify(todos))
    show()
    return false
}

function clearDefault(a) {
    if (a.defaultValue == a.value) {
        a.value = ''
    }
}

function removeTask() {
    let id = this.getAttribute('id')
    let todos = getTodos()
    todos.splice(id, 1)
    localStorage.setItem('todo', JSON.stringify(todos))
    show()
    return false
}