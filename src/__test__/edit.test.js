import { completed, checkStatus } from '../__mocks__/removeCompleted.js';
import { changeTask, editItem } from '../__mocks__/display.js';

const list = [
  {
    description: 'Finish project Microverse today',
    completed: false,
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

describe('Testing change status', () => {
  test('Change status using checkbox: false to true', () => {
    const checkedBox = {
      checked: true,
    };
    const item = list[1];
    const span = false;

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
  test('Edit value of description', () => {
    const newText = { value: 'Project Done' };
    const arrList = list[0];
    changeTask(arrList, newText);
    expect(arrList.description).toEqual(newText.value);
  });

  test('Expect test to be edited', () => {
    const eleEdit = list[2];
    const span = {
      innerHTML: eleEdit.description,
    };

    const newInput = {
      value: 'Visit my parents',
      parentNode: {
        replaceChild(newChild, actualChild) {
          const parentNode = {
            child: newInput,
          };
          if (parentNode.child === actualChild) {
            parentNode.child = newChild;
          }
        },
      },
    };

    editItem(span, newInput, eleEdit);
    expect(list[2].description).toBe(newInput.value);
  });
});
