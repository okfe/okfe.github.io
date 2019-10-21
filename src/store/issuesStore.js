import { observable, action } from 'mobx';
import request from '_src/request';
import filePath from '_src/constants/filePath';
import utils from '_src/utils';

export default class IssuesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable issuesList = [];
  @observable issueDetail = '';

  // 获取本地 Issues 列表
  @action async getIssuesList() {
    try {
      this.rootStore.commonStore.handleLoading('issuesList', true);
      const result = await request(filePath.GET_ISSUES_LIST);

      this.issuesList = result.data || [];
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issuesList', false);
    }
  }
  // // 通过 API 获取 Issues 列表
  // @action async getIssuesList() {
  //   try {
  //     this.rootStore.commonStore.handleLoading('issuesList', true);
  //     const result = await request(url.GET_ISSUES_LIST);
  //     this.issuesList = result || [];
  //   } catch (error) {
  //     utils.globalMessage('error', error);
  //   } finally {
  //     this.rootStore.commonStore.handleLoading('issuesList', false);
  //   }
  // }

  @action async getIssueDetail(id) {
    try {
      this.rootStore.commonStore.handleLoading('issueDetail', true);
      // const result = await request(`${url.GET_ISSUE}${id}?per_page=100`);
      const result = await request(`${filePath.GET_ISSUE}${id}.json`);
      this.issueDetail = result.data || {};
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issueDetail', false);
    }
  }
}