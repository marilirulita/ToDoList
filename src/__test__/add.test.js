//import { addItem } from '../display.js'
import {addItem, Task} from '../__mocks__/display.js';

const list = [];

list.push(new Task('Finish project Microverse today', true, 0));
list.push(new Task('Meeting at 5 pm', false, 1));
list.push(new Task('Go to the supermarket', false, 2));

describe('Testing add', () => {

  test('Add DOM eement to list', () => {
    document.body.innerHTML = `
    <ul id="container">
    <li><div class="flex"><input type="checkbox" class="checkbox">
    <input class="textarea" id ="TaskID" type="text"></div></li>
    </ul>`;

    const newTask = document.getElementById('TaskID');
    newTask.value = 'I have pending installations!';

    addItem(newTask, list);
    expect(list).toHaveLength(4);
  });
});
