import './style.css';
import { display } from './display.js';

window.onload = () => {
  const local = window.localStorage.getItem('tasklist');
  let list = [];
  if (local != null) {
    list = JSON.parse(local);
  }
  display(list);
};
