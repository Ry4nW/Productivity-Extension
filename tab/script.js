const todoList = document.querySelector("#todo_list")
const addButton = document.querySelector('#todo_add')
const addInput = document.querySelector('#todo_add_input')
const deleteButton = document.querySelector('#todo_delete')

addButton.addEventListener("click", (clickEvent) => {
  if (addInput.value !== ''){
    const listItem = document.createElement('option')
    listItem.innerText = addInput.value
    listItem.value = addInput.value

    todoList.append(listItem)
    addInput.value = ''
    addInput.focus()
  }
})
