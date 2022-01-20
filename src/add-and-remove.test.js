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

  
});