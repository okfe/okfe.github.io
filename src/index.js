import './style.less';
import api from '../api';

document.addEventListener("DOMContentLoaded", () => {
  const a = 'test';
  console.log(issueListJson.data);
  document.body.innerHTML = a;
  const issueList = api.getIssueList();
  console.log(issueList);
}, false);
