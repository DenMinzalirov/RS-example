import './index.css';

export default class Search {
  constructor(value) {
    this.value = value;
  }

  render() {
    const search = document.createElement('div');
    search.classList.add('container', 'search-wraper');
    search.insertAdjacentHTML(
      'beforeend',
      `<div class="row">
      <div class="col-12">
          <div class="input-group">
              <input class="form-control border-secondary py-2" type="search" autofocus autocomplete="off" placeholder=${this.value}>
              <div class="input-group-append">
                  <button class="btn btn-outline-secondary search" type="button">
                      Search
                  </button>
                  
              </div>
          </div>
      </div>
      <div class="search-text"></div>
      </div>`,
    );

    // console.log(input);
    return search;
  }
}
