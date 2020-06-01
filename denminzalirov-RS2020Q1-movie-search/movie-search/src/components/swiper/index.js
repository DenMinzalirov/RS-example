import './index.css';

import Card from '../card';

const swiperRend = (data, text) => {
  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper-container');
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  swiperContainer.append(swiperWrapper);
  const searchText = document.querySelector('.search-text');
  swiperContainer.insertAdjacentHTML('beforeend', '<div class="swiper-button-next"></div>');
  swiperContainer.insertAdjacentHTML('beforeend', '<div class="swiper-button-prev"></div>');
  if (data.Response === 'True') {
    searchText.innerText = (`Showing results for ${text}`);
    data.Search.map((el) => {
      const card = new Card(el);
      swiperWrapper.append(card.render());
      return card;
    });
  } else {
    searchText.innerText = (`No results for ${text}`);
  }

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');
  swiperContainer.append(swiperPagination);

  return swiperContainer;
};

export default swiperRend;
