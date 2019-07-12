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
  }
}
