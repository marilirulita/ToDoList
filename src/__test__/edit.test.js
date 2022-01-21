import { CheckLocal, completed, checkStatus } from '../__mocks__/removeCompleted.js';

const newList = new CheckLocal();

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

newList.list[0] = { description: 'Finish part 2', completed: false, index: 0 };
newList.list[1] = { description: 'Meeting at 8 am', completed: false, index: 1 };
newList.list[2] = { description: 'Hope approved at first strike', completed: false, index: 2 };

// test('true', () => {
//   const checked = document.getElementById('0');
//   checkStatus(list[0], list);
//   expect(list[0].complete).toBe(true);
// });

test('true', () => {
  newList.doneTask(0);
  expect(newList.list[0].completed).toBe(true);
});

test('igual', () => {
  const listNew = completed(list);
  expect(listNew).toHaveLength(2);
});
