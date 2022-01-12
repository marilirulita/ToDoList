import { deletElement} from './deleteElements.js';
import saveList from './saveLocal.js';

const editTask = (description, element, list) => {
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  const delet = document.createElement('input');
  delet.type = 'button';
  delet.value = 'delete';
  delet.addEventListener('click', () => {
    deletElement(list, element);
  });

  taskInput.value = description.innerHTML;
  description.parentNode.replaceChild(taskInput, description);
  taskInput.parentNode.appendChild(delet);
  taskInput.focus();

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('you press enter!');
      description.innerHTML = taskInput.value;
      taskInput.parentNode.replaceChild(description, taskInput);
      element.description = taskInput.value;
      saveList(list);
      console.log(list);
      description.parentNode.removeChild(delet);
  }
  });
}

export {editTask as default};