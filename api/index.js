import issueListJson from '../data/issueList.json';

const ERR_OK = 0;

export default {
  /**
   * 获取issueList列表
   * @returns { Array } issueList
   */
  getIssueList() {
    if (issueListJson.code === ERR_OK) {
      return issueListJson.data;
    }
    return [];
  },
  /**
   * 获取某一条issue详情
   * @param {Number} id
   * @returns {String} issueBody
   */
  getIssue(id) {
    if (id) {
      let issue = '';
      $.ajax({
        url: `../data/${id}.json`,
        async: false,
        success(data) {
          if (data.code === ERR_OK) {
            issue = data.data;
          } else {
            issue = ''
          }
        },
        error() {
          issue = ''
        }
      })
      return issue;
    }
    return '';
  }
}
