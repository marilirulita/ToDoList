import { completed } from '../removeCompleted.js';
import { removeItem } from '../display.js'
import Task from '../listTask.js';

const list = [];

list.push(new Task('Finish part 2', true, 0));
list.push(new Task('Meeting at 8 am', false, 1));
list.push(new Task('Hope approved at first strike', false, 2));

describe('Testing remove', () => {
  test('Test remove an item from list', () => {
    const selecElem = list[1];

    removeItem(list, selecElem);
    expect(list).toHaveLength(2);
  });

  test('Test remove completed task from list', () => {
    const newList = completed(list);
    expect(newList).toHaveLength(1);
  });

  test('DOM..remove', () => {
    document.body.innerHTML = `<ul id="container">
    <li><span id="2"><input type="checkbox" class="checkbox">Finish part 2</span></li></ul>`;

    const remove = list[0];
    removeItem(list, remove);

    expect(list).toHaveLength(1);
  });
});