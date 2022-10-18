// EXERCÍCIO 03

const task = process.argv[2]
let toDoList = ["Passear com o cachorro", "Varrer a sala"]

const newTask = (item) => {
    toDoList.push(item)
    return toDoList
}

console.log(`Lista de tarefas: ${newTask(task)}`)