import { completed } from '../removeCompleted.js';
import { removeItem } from '../display.js';

const list = [
  {
    description: 'Finish project Microverse today',
    completed: true,
    index: 0,
  },
  {
    description: 'Meeting at 5 pm',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the supermarket',
    completed: false,
    index: 2,
  },
];

describe('Testing remove', () => {
  test('Test remove an item from list', () => {
    const selecElem = {
      description: 'Cook for the dinner at 6pm',
      completed: false,
      index: 3,
    };

    removeItem(list, selecElem);
    expect(list).toHaveLength(3);
  });

  test('Test remove completed task from list', () => {
    const newList = completed(list);
    expect(newList).toHaveLength(2);
  });

  test('DOM..remove', () => {
    document.body.innerHTML = `<ul id="container">
  <li><div class="flex"><input type="checkbox" class="checkbox">
  <input class="textarea" id ="TaskID" type="text"></div></li>
  </ul>`;

    const remove = document.getElementById('TaskID');
    const newList = completed(list);
    removeItem(list, remove, list[0]);
    expect(newList).toHaveLength(2);
  });
});