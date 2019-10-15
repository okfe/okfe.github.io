import IssuesStore from './issuesStore';
import CommonStore from './commonStore';

class rootStore {
  constructor() {
    this.issuesStore = new IssuesStore(this);
    this.commonStore = new CommonStore(this);
  }
}
export default new rootStore();