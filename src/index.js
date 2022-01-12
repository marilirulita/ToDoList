import './style.css';
import Task from './listTask.js';
import add from './addElement.js';
import deleteComplete from './deleteElements';

let list = [];

const display = (list) => {
  //list.sort((x, y) => x.index - y.index);

  const title = document.createElement('h4');
  title.innerHTML = 'Today´s To Do';
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'task';
  input.id = 'newTask';
  input.placeholder = 'Add to your list...';

  input.addEventListener('keypress', (event) => {
    add(event, input, list);
  });

  const listElements = document.createElement('ul');
  listElements.classList.add('listElements');

  listElements.appendChild(title);
  listElements.appendChild(input);

  list.forEach((element) => {
    const elementList = document.createElement('li');
    const description = document.createElement('span');
    description.innerHTML = element.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = element.index;
    checkBox.onchange = function () {
      element.completed = this.checked;
    };

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

  button.addEventListener('click', () => deleteComplete(list));

  listElements.appendChild(button);

  const listPlacehold = document.getElementById('list-placeholder');
  listPlacehold.innerHTML = '';
  listPlacehold.appendChild(listElements);
}

display(list);

export { display as default };