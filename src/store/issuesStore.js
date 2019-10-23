import { observable, action } from 'mobx';
import request from '_src/request';
import filePath from '_src/constants/filePath';
import utils from '_src/utils';

export default class IssuesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // 文章列表
  @observable issueList = [];
  // 文章详情
  @observable issueDetail = '';
  // 文章分类列表
  @observable categoryList = [];
  // 分类下文章列表
  @observable cateroryIssueList = [];

  // 获取本地 Issues 列表
  @action async getIssueList() {
    try {
      this.rootStore.commonStore.handleLoading('issueList', true);
      const result = await request(filePath.GET_ISSUE_LIST);

      this.issueList = result.data || [];
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issueList', false);
    }
  }

  // 获取文章详情
  @action async getIssueDetail(issueId) {
    try {
      this.rootStore.commonStore.handleLoading('issueDetail', true);
      const result = await request(`${filePath.GET_ISSUE}${issueId}.json`);
      this.issueDetail = result.data || {};
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('issueDetail', false);
    }
  }

  // 获取分类列表
  @action async getCategoryList() {
    try {
      this.rootStore.commonStore.handleLoading('categoryList', true);
      const result = await request(filePath.GET_CATEGORY_LIST);
      this.categoryList = result.data || [];
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('categoryList', false);
    }
  }

  // 获取分类下文章列表
  @action async getCateroryIssueList(categoryId) {
    try {
      this.rootStore.commonStore.handleLoading('categoryIssue', true);
      const result = await request(filePath.GET_CATEGORY_LIST);
      result.data.map(item => {
        if (`${categoryId}` === `${item.id}`) {
          this.cateroryIssueList = item.blogs;
        }
      });
    } catch (error) {
      utils.globalMessage('error', error);
    } finally {
      this.rootStore.commonStore.handleLoading('categoryIssue', false);
    }
  }
}