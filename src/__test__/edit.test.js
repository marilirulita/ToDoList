import { editItem } from '../display.js'
import Task from '../listTask.js';
import { completed, checkStatus } from '../removeCompleted.js';

const list = [];

list.push(new Task('Finish project Microverse today', false, 0));
list.push(new Task('Meeting at 5 pm', false, 1));
list.push(new Task('Go to the supermarket', false, 2));

describe('Testing change status', () => {
  test('Change status using checkbox: false to true', () => {
    document.body.innerHTML = `
    <ul id="container">
    <li><input type="checkbox" id="1"><span id="task1">Meeting at 5 pm</pan></li>
    </ul>`;

    const checkedBox = document.getElementById('1');
    checkedBox.checked = true;
    const item = list[1];
    const span = document.getElementById('task1');

    item.completed = checkedBox.checked;
    checkStatus(item, checkedBox, span);
    expect(list[1].completed).toBe(true);
  });
});

describe('Testing remove completed tasks', () => {
  test('Delete task completed: true', () => {
    const listNew = completed(list);
    expect(listNew).toHaveLength(2);
  });
});

describe('Testing edit elements', () => {
  test('Expect test to be edited', () => {
    document.body.innerHTML = `
    <ul id="container">
    <li><input type="checkbox" id="1"><input class="textarea" id ="TaskID" type="text"></li>
    </ul>`;

    const eleEdit = list[2];
    const newImput = document.getElementById('TaskID');
    newImput.value = 'Visit my parents';
    const span = document.createElement('span');

    editItem(span, newImput, eleEdit);
    expect(list[2].description).toBe(newImput.value);
  });
});
