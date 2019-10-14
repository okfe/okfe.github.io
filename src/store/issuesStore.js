import { observable, action } from 'mobx';
import request from '_src/request';
import url from '_src/constants/url';

export default class IssuesStore {

  @observable issuesList = [];
  @observable issueDetail = {};

  @action async getIssuesList() {
    const result = await request(url.GET_ISSUES_LIST);
    this.issuesList = result || [];
  }

  @action async getIssueDetail(id) {
    const result = await request(`${url.GET_ISSUE}${id}?per_page=100`);
    this.issueDetail = result || {};
  }
}