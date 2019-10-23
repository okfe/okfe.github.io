const got = require('got');
const fs = require('fs');
const path = require('path');

const labelsUrl = 'https://api.github.com/repos/okfe/weekly/labels';
const issuesUrl = 'https://api.github.com/repos/okfe/weekly/issues?per_page=100';

const distPath = path.resolve(__dirname, '../public/data');
const labelsFileName = path.resolve(distPath, 'labelList.json');
const issuesFileName = path.resolve(distPath, 'issueList.json');
const categoriesFilePath = path.resolve(distPath, 'categoryList.json');

// 文章分类
const writeCategories = async () => {
  let categories = [];
  const labelResponse = await got(labelsUrl);
  const issueResponse = await got(issuesUrl);
  const labelList = JSON.parse(labelResponse.body) || [];
  let issueList = JSON.parse(issueResponse.body) || [];
  issueList = issueList.map((issue) => {
    return {
      ...issue,
      labels: issue.labels.map(item => item.id)
    }
  });

  labelList.map((label) => {
    let blogs = [];

    issueList.map((issue) => {
      if (issue.labels.includes(label.id)) {
        blogs = [...blogs, {
          title: issue.title,
          id: issue.id
        }]
      }
    });

    categories = [
      ...categories, {
        ...label,
        blogs
      }
    ]
  });

  fs.writeFile(categoriesFilePath, JSON.stringify({
    code: 0,
    data: categories
  }), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

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

  const issuesResult = await got(issuesUrl);
  const issueList = [];

  JSON.parse(issuesResult.body).forEach((item) => {
    const labels = item.labels.map((label) => {
      return {
        id: label.id,
        name: label.name,
        color: label.color
      };
    });

    issueList.push({
      ...item,
      labels
    });

    fs.writeFile(path.resolve(distPath, `${item.id}.json`), JSON.stringify({
      code: 0,
      data: item.body
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

  writeCategories();
})();
