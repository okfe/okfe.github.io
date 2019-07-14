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
    // fragments += `<div class="issue-title" data-id=${issue.id}>${issue.title}</div>`;
    fragments +=
      `
    <div class="article-card">
      <span class="article-title">${issue.title}</span>
      <div class="article-info">
        <span class="article-author">${issue.author || '暂无作者信息'}</span>
        <span class="article-date">${issue.created_at}</span>
      </div>
      <p class="article-outline">
        ${issue.outline || '暂无文章缩略信息'}
      </p>
      <div class="article-detail" data-id="${issue.id}">
        继续阅读<i class="fa fa-angle-double-right fa-lg"></i>
      </div>
    </div>`
    route.route(`${issue.id}`, viewFn.bind(null, `/${issue.id}`));
  });

  route.route('/', () => {
    $('#app').html(fragments);
    const $issueList = $('.article-detail');
    $issueList.on('click', (ev) => {
      const id = $(ev.target).data('id')
      location.hash = id;
    });
  });

  route.route('/archive', () => {
    $('#app').html('<div class="markdown-body">敬请期待!!!</div>');
  });

  route.route('/about', () => {
    $('#app').html('<div class="markdown-body">敬请期待!!!</div>');
  });


}, false);
