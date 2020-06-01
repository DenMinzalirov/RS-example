import './index.css';

export default class Header {
  constructor(nameApp) {
    this.nameApp = nameApp;
  }

  render() {
    const header = document.createElement('header');
    // header.classList.add('container-fluid');
    header.insertAdjacentHTML(
      'beforeend',
      `<div class="header">${this.nameApp}</div>`,
    );
    return header;
  }
}
