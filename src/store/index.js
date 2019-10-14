import IssuesStore from './issuesStore';

class rootStore {
  constructor() {
    this.issuesStore = new IssuesStore();
  }
}
export default new rootStore();