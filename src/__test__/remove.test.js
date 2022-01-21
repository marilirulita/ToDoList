import { completed } from '../__mocks__/removeCompleted.js';
import { removeItem } from '../__mocks__/display.js';

const list = [
  {
    description: 'Finish part 2',
    completed: true,
    index: 0,
  },
  {
    description: 'Meeting at 8 am',
    completed: false,
    index: 1,
  },
  {
    description: 'Hope approved at first strike',
    completed: false,
    index: 2,
  },
];

describe('Testing remove', () => {
  test('Test remove an item from list', () => {
    const selecElem = {
      description: 'Breakfast at 7am',
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