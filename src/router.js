class Router {
  constructor() {
    this.currentUrl = '';
    this.routes = {};
  }

  route(path, callback) {
    this.routes[path] = callback || (() => {});
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    const url = this.currentUrl !== undefined ? this.currentUrl : '/';
    this.routes[this.currentUrl]();
  }

  init() {
    window.addEventListener('load', this.refresh.bind(this));
    window.addEventListener('hashchange', this.refresh.bind(this));
  }
}

export default Router;
