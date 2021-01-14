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

function show() {
    let todos = getTodos()
    let html = '<ul>'

    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>'
    }
    html += '</ul>'
    document.getElementById('todos').innerHTML = html

    let buttons = document.getElementsByClassName('remove')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeTask)
    }
}

document.getElementById('add').addEventListener('click', addTask)
show()