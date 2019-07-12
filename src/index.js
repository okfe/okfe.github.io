import './style.less';
import issueListJson from '../api/issueList.json';

document.addEventListener("DOMContentLoaded", () => {
  const a = 'test';
  console.log(issueListJson.data);
  document.body.innerHTML = a;
  $('body').append('<div><a href="../api/464908294.json">issue</a><div>');
}, false);
