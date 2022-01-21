import Task from '../listTask.js';
import saveList from './saveLocal.js';
import { completed, checkStatus } from './removeCompleted.js';

const updatePosition = (newList) => {
  newList.forEach((task, id) => {
    task.index = id;
  });
};

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

const display = (list) => {
  const title = document.createElement('h4');
  title.innerHTML = 'Today´s To Do';
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'task';
  input.id = 'newTask';
  input.placeholder = 'Add to your list...';

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value !== '') {
      addItem(input, list);
      display(list);
      saveList(list);
    }
  });

  const listElements = document.createElement('ul');
  listElements.classList.add('listElements');

  listElements.appendChild(title);
  listElements.appendChild(input);

  list.forEach((element) => {
    const elementList = document.createElement('li');
    const description = document.createElement('span');
    description.innerHTML = element.description;

    description.addEventListener('click', () => {
      const taskInput = document.createElement('input');
      taskInput.type = 'text';
      const delet = document.createElement('input');
      delet.type = 'button';
      delet.value = 'delete';
      delet.addEventListener('click', () => {
        removeItem(list, element);
        updatePosition(list);
        saveList(list);
        display(list);
      });

      taskInput.value = description.innerHTML;
      description.parentNode.replaceChild(taskInput, description);
      taskInput.parentNode.appendChild(delet);
      taskInput.focus();

      taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          description.innerHTML = taskInput.value;
          taskInput.parentNode.replaceChild(description, taskInput);
          element.description = taskInput.value;
          saveList(list);
          description.parentNode.removeChild(delet);
        }
      });
    });

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = element.index;
    checkBox.checked = element.completed;
    checkBox.addEventListener('change', () => {
      checkStatus(element, checkBox, description);
      saveList(list);
    });

    if (checkBox.checked) {
      description.classList.add('complete');
    }

    elementList.classList.add('elementList');
    elementList.appendChild(checkBox);
    elementList.appendChild(description);
    listElements.appendChild(elementList);
  });

  const button = document.createElement('button');

  button.classList.add('delete-button');
  button.innerHTML = 'Clear all completed';
  button.type = 'button';
  button.id = 'delete-button';

  button.addEventListener('click', () => {
    const newList = completed(list);
    updatePosition(newList);
    saveList(newList);
    display(newList);
  });

  listElements.appendChild(button);

  const listPlacehold = document.getElementById('list-placeholder');
  listPlacehold.innerHTML = '';
  listPlacehold.appendChild(listElements);
};

export { display, addItem, removeItem };