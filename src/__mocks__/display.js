class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addItem = (input, list) => {
  const newTask = new Task(input.value, false, list.length);
  list.push(newTask);
  input.value = '';
};

const removeItem = (list, element) => {
  list.forEach((ele) => {
    if (ele.index === element.index) {
      const indice = list.indexOf(ele);
      list.splice(indice, 1);
    }
  });
};

const editItem = (description, taskInput, element) => {
  description.innerHTML = taskInput.value;
  taskInput.parentNode.replaceChild(description, taskInput);
  element.description = taskInput.value;
};


export {
  addItem,
  removeItem,
  editItem,
  Task
};
