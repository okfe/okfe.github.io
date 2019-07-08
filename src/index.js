import './style.less';
import data from '../mockdata/248897246.json';

document.addEventListener("DOMContentLoaded", () => {
  console.log(data);
  $('body').append('<div class="markdown-body"></div>');
  $('.markdown-body').html(`${data.data}`);
}, false);
