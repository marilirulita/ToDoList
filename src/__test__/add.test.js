import { addItem } from '../display.js';

const input = {
  value: 'Cook for the dinner at 6pm',
};

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

describe('Testing add', () => {
  test('empty list', () => {
    const emptyList = [];
    addItem(input, emptyList);
    expect(emptyList).toHaveLength(1);
  });

  test('add new item to list', () => {
    addItem(input, list);
    expect(list).toHaveLength(4);
  });

  test('Empty DOM', () => {
    document.body.innerHTML = `
    <ul id="container">
    <li><div class="flex"><input type="checkbox" class="checkbox">
    <input class="textarea" id ="TaskID" type="text"></div></li>
    </ul>
    `;
    const emptyList = [];
    addItem(input, emptyList);
    expect(document.body.querySelectorAll('li')).toHaveLength(1);
  });
});
