/* eslint-disable import/no-cycle */
import Task from './listTask.js';
import display from './display.js';
import saveList from './saveLocal.js';

const add = (event, input, list) => {
  if (event.key === 'Enter' && input.value !== '') {
    const newTask = new Task(input.value, false, list.length);
    list.push(newTask);
    input.value = '';
    display(list);
    saveList(list);
  }
};

export { add as default };