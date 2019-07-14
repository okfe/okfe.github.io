import './style.less';
import api from '../api';
import Router from './router';

document.addEventListener("DOMContentLoaded", () => {
  const issueList = api.getIssueList();

  const viewFn = (id) => {
    $('#app').html(
      `<article class="markdown-body">
        ${api.getIssue(id)}
      </article>`
    );
  }

  const route = new Router();
  route.init();

  let fragments = '';
  issueList.forEach((issue) => {
    fragments += `<div class="issue-title" data-id=${issue.id}>${issue.title}</div>`;
    route.route(`${issue.id}`, viewFn.bind(null, `/${issue.id}`));
  });

  route.route('/', () => {
    $('#app').html(fragments);
    const $issueList = $('.issue-title');
    $issueList.on('click', (ev) => {
      const id = $(ev.target).data('id')
      location.hash = id;
    });
  });
}, false);
