import { observable, action } from 'mobx';
import request from '_src/request';
import url from '_src/constants/url';
import utils from '_src/utils';

export default class IssuesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable issuesList = [];
  @observable issueDetail = {};

  @action async getIssuesList() {
    try {
      this.rootStore.commonStore.handleLoading('issuesList', true);
      const result = await request(url.GET_ISSUES_LIST);
      this.issuesList = result || [];
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issuesList', false);
    }
  }

  @action async getIssueDetail(id) {
    try {
      this.rootStore.commonStore.handleLoading('issueDetail', true);
      const result = await request(`${url.GET_ISSUE}${id}?per_page=100`);
      this.issueDetail = result || {};
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issueDetail', false);
    }
  }
}