import { addItem, removeItem } from './display.js';
import { completed } from './removeCompleted.js';

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

describe('Testing add and remove', () => {
  test('empty list', () => {
    const emptyList = [];
    addItem(input, emptyList);
    expect(emptyList).toHaveLength(1);
  });

  test('add new item to list', () => {
    addItem(input, list);
    expect(list).toHaveLength(4);
  });

  test('Test remove an item from list', () => {
    const selecElem = {
      description: 'Cook for the dinner at 6pm',
      completed: false,
      index: 3,
    };

    removeItem(list, selecElem);
    expect(list).toHaveLength(3);
  });

  
});