import { observable, action } from 'mobx';

export default class IssuesStore {

  @observable loadingController = {
    issuesList: false,
    issueDetail: false
  };

  @action async handleLoading(key, status) {
    this.loadingController = {
      ...this.loadingController,
      [key]: status,
    };
  }
}