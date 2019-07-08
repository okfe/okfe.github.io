const got = require('got');
const md = require('markdown-it')();
const fs = require('fs');
const path = require('path');

const labelsUrl = 'https://api.github.com/repos/mqyqingfeng/Blog/labels';

const distPath = path.resolve(__dirname, '../mockdata');
const labelsFileName = path.resolve(distPath, 'labelList.json');
const issuesFileName = path.resolve(distPath, 'issueList.json');

(async () => {
  const labelsResult = await got(labelsUrl);
  const labels = JSON.parse(labelsResult.body).map((item) => {
    return {
      id: item.id,
      name: item.name,
      color: item.color
    };
  });
  fs.writeFile(labelsFileName, JSON.stringify({
    code: 0,
    data: labels
  }), (err) => {
    if (err) {
      console.log(err);
    }
  });

  let comIssuesList = []
  let flag = true;
  let page = 1;
  while (flag) {
    const issuesUrl = `https://api.github.com/repos/mqyqingfeng/Blog/issues?page=${page}`;
    const issuesResult = await got(issuesUrl);
    const list = JSON.parse(issuesResult.body);
    // console.log(list.length);
    if (list.length <= 0) {
      flag = false;
    } else {
      comIssuesList = [...comIssuesList, ...list];
      page++;
    }
  }

  const issueList = [];

  // console.log(comIssuesList.length);
  comIssuesList.forEach((item) => {
    const labels = item.labels.map((label) => {
      return {
        id: label.id,
        name: label.name,
        color: label.color
      };
    });
    issueList.push({
      id: item.id,
      title: item.title,
      created_at: item.created_at,
      updated_at: item.updated_at,
      labels
    });

    fs.writeFile(path.resolve(distPath, `${item.id}.json`), JSON.stringify({
      code: 0,
      data: md.render(item.body)
    }), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

  fs.writeFile(issuesFileName, JSON.stringify({
    code: 0,
    data: issueList
  }), (err) => {
    if (err) {
      console.log(err);
    }
  });
})();
