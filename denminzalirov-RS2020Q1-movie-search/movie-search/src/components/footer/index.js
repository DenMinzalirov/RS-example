import './index.css';

export default class Header {
  constructor(nameApp) {
    this.nameApp = nameApp;
  }

  render() {
    const footer = document.createElement('footer');
    footer.classList.add('page-footer');
    footer.classList.add('font-small');
    footer.classList.add('blue');
    footer.insertAdjacentHTML(
      'beforeend',
      `
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>${this.nameApp}</small>
    </div>
  </footer>
      `,
    );
    return footer;
  }
}
