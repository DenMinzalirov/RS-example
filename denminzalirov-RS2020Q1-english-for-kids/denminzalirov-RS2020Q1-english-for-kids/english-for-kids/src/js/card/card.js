import './card.css'

class Card {
    constructor({ word, translation, image, audioSrc }) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }

    generateCard(isTrain) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-container');
        if (isTrain) {
            cardItem.innerHTML =
                `<figure class="card card-flip">
            <div class="card">
               <img class="card-img-top img-fluid" src=${this.image} alt="">
               <div class="card-footer bg-aqua">
                    ${this.word}
                    <div class="rotate"></div>
               </div>
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src=${this.image} alt="">
                <div class="card-footer bg-aqua">
                    ${this.translation}
                </div>
            </div>
            <audio id=${this.word} src=${this.audioSrc}></audio>
         </figure>`;

            const rotateNod = cardItem.querySelector('.rotate');
            const cardFlip = cardItem.querySelector('.card-flip');
            rotateNod.addEventListener('click', () => {
                cardFlip.classList.add('activeRotate');
            })
            cardFlip.addEventListener('mouseleave', () => {
                cardFlip.classList.remove('activeRotate');
            })
            cardItem.addEventListener('click', (e) => {
                if (e.target.tagName === 'IMG') {
                    const play = document.getElementById(this.word)
                    play.play();
                }
            })

        } else {
            cardItem.innerHTML =
                `<figure class="card card-flip" id=${this.word}>
            <div class="card">
               <img class="card-img-top img-fluid gameImg" id=${this.word} src=${this.image} alt="">
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src=${this.image} alt="">
            </div>
            <audio id=${this.word} class='audio' src=${this.audioSrc}></audio>
         </figure>`;
        }

        return cardItem
    }
}

const renderCard = (card, isTrain) => {
    const item = new Card(card)
    return item.generateCard(isTrain)
}

export default renderCard