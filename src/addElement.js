import Task from "./listTask";
import display from './index.js';

const add = (event, input, list) => {
  if (event.key === 'Enter' && input.value !== '') {
    const newTask = new Task(input.value, false, list.length);
    list.push(newTask);
    console.log(list);
    input.value = '';
    display();
  }
} 

// //  const local = window.localStorage.getItem('tasklist');
// //  tasksList = JSON.parse(local);  
// //    saveList(tasksList);
// //    updateCheck(tasksList);

export { add as default };