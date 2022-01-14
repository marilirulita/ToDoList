import './style.css';
import display from './display.js';

window.onload = () => {
  const local = window.localStorage.getItem('tasklist');
  let list = [];
  if (local != null) {
    list = JSON.parse(local);
  }
  // display(list);
};

const dragElementAll = document.querySelectorAll('.dragElements');
for (const dragElement of dragElementAll) {
  dragElement.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', dragElement.id);
   // dragElement.classList.add('hiden');
  });
}

const dropZone = document.querySelector('.drop-zone');
dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('drop-zone-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drop-zone-over');
});

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  const dropedElementId = e.dataTransfer.getData('text/plain');
  const dropedElement = document.getElementById(dropedElementId);
  dropZone.appendChild(dropedElement);
  dropZone.classList.remove('drop-zone-over');
  
});
