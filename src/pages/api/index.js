/**
 * @desc [数据处理]
 */
import moment from 'moment';
import issueListJson from '../../data/issueList.json';


const ERR_OK = 0;

export default {
  /**
   * 获取issueList列表
   * @returns { Array } issueList
   */
  getIssueList() {
    if (issueListJson.code === ERR_OK) {
      const data = issueListJson.data;
      data.map((res) => {
        res.time = moment(res.updated_at).format('YYYY年M月');
        res.created_at =  moment(res.updated_at).format('YYYY年M月D日 HH:MM');
        const classify = res.updated_at.match('^[0-9]\\S{1,6}');
        res.belong = new Date(classify).getTime();
        res.updated_at = res.updated_at.match('^[0-9]\\S{1,9}');
        console.log(res);
      });
      return data;
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
      console.log('getIssue', id); // eslint-disable-line
      fetch(`./data/${id}.json`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },

      }).then(response => response.json())//解析为Promise
        .then(data => {
          issue = data.data;
          return issue;
        });
      return issue;
    }
    return 'issue';
  }
};
