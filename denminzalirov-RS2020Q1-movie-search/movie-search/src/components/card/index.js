import OMD_API_KEY from '../../services/constant';
import './index.css';

export default class Card {
  constructor(data) {
    const {
      Title, Poster, Year, imdbID,
    } = data;
    this.title = Title;
    this.poster = Poster;
    this.year = Year;
    this.imdbID = imdbID;
    if (Poster === 'N/A') {
      this.poster = 'http://www.sinbarrera.es/assets/img/places/main/14554_1.jpg';
    }
    this.cardWrap = document.createElement('div');
    this.card = document.createElement('div');
  }

  async getRating() {
    const url = `https://www.omdbapi.com/?i=${this.imdbID}&apikey=${OMD_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    this.card.insertAdjacentHTML('beforeend', `<div class="rating"><div class="star"></div><div>${data.imdbRating}</div></div>`);
  }

  render() {
    this.cardWrap.classList.add('swiper-slide');
    this.card.classList.add('card-wrap');
    this.card.insertAdjacentHTML('beforeend', `<a href="https://www.imdb.com/title/${this.imdbID}/"><p>${this.title}</p></img></a>`);
    if (this.poster === '') {
      this.card.insertAdjacentHTML('beforeend', `<p>${this.poster}</p>`);
    } else { this.card.insertAdjacentHTML('beforeend', `<a href="https://www.imdb.com/title/${this.imdbID}/"><img src=${this.poster}></img></a>`); }
    this.card.insertAdjacentHTML('beforeend', `<p>${this.year}</p>`);
    this.getRating();
    this.cardWrap.append(this.card);
    return this.cardWrap;
  }
}
