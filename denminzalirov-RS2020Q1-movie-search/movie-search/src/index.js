import Swiper from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/swiper.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import startSpiner from './components/spiner';
import Card from './components/card';
import swiperRend from './components/swiper';
import OMD_API_KEY, { yaTranslateApiKey } from './services/constant';


let slides = 4;
const { clientWidth } = document.documentElement;
if (clientWidth < 760) {
  slides = 1;
}
if ((clientWidth >= 760) && (clientWidth <= 990)) {
  slides = 2;
}
if ((clientWidth > 990) && (clientWidth < 1200)) {
  slides = 3;
}
if (clientWidth >= 1200) {
  slides = 4;
}

startSpiner();
const spinner = document.querySelector('.spinner');
spinner.classList.add('spinner-hide');
let countQuery = 1;


const searchQuery = async (text, page) => {
  countQuery += 1;
  spinner.classList.remove('spinner-hide');
  const url = `https://www.omdbapi.com/?s=${text}&page=${page}&apikey=${OMD_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    spinner.classList.add('spinner-hide');
    return data;
  } catch (error) {
    return error;
  } finally {
    spinner.classList.add('spinner-hide');
  }
};

const body = document.querySelector('body');
body.classList.add('container-fluid');

const search = new Search('Search');

body.append(
  new Header('MovieSearch').render(),
  search.render(),
);

const input = document.querySelector('input');
const searchBtn = document.querySelector('.search');

const getMovie = async (text) => {
  if (!text) {
    return;
  }
  const footer = document.querySelector('footer');
  if (footer) {
    footer.remove();
  }
  const swiperWraper = document.querySelector('.swiper-wrapper');
  if (swiperWraper) {
    swiperWraper.remove();
  }

  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yaTranslateApiKey}&text=${text}&lang=ru-en`;

  try {
    const resYa = await fetch(url);
    const dataYa = await resYa.json();

    const data = await searchQuery(dataYa.text.join(), countQuery);
    body.append(swiperRend(data, dataYa.text.join()));

    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: slides,
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    if (mySwiper.length) {
      mySwiper[mySwiper.length - 1].on('reachEnd', async () => {
        const dataTwoQuery = await searchQuery(dataYa.text.join(), countQuery);
        if (dataTwoQuery.Response === 'False') {
          return;
        }
        dataTwoQuery.Search.map((el) => {
          const card = new Card(el);
          mySwiper[mySwiper.length - 1].appendSlide(card.render());
          return card;
        });
      });
    } else {
      mySwiper.on('reachEnd', async () => {
        const dataTwoQuery = await searchQuery(dataYa.text.join(), countQuery);
        dataTwoQuery.Search.map((el) => {
          const card = new Card(el);
          mySwiper.appendSlide(card.render());
          return card;
        });
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  body.append(new Footer('RS School 2020q1').render());
};

document.addEventListener('DOMContentLoaded', () => {
  getMovie('dream');
});
searchBtn.addEventListener('click', () => {
  spinner.classList.remove('spinner-hide');
  setTimeout(() => {
    getMovie(input.value);
    spinner.classList.add('spinner-hide');
  }, 1000);
});
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    spinner.classList.remove('spinner-hide');
    setTimeout(() => {
      getMovie(input.value);
      spinner.classList.add('spinner-hide');
    }, 1000);
  }
});

body.append(new Footer('RS School 2020q1').render());
