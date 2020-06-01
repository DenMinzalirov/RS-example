import '../header/navBar';
import './app.css';
import { actionSetA, actionSetB, actionSetС, adjective, animalSetA, animalSetB, clothes, emotion, mainPages } from '../card/data';
import renderCard from '../card/card';
import MainPageItem from '../mainPage/mainPageItem';
import playGame from '../play/play';
import statistics from '../statistics/statistics'

const main = document.querySelector('main');
const rating = document.querySelector('.rating');
const appNavigation = document.querySelector('.app-navigation');
const toggleSwitch = document.querySelector('.toggle');
const navLinkBtn = document.querySelectorAll('.nav-link');
let sectionGroup = document.querySelectorAll('.section-group');
const stat = document.querySelector('.statistics');

const renderMainPageItem = (el, stateGame) => {
    const item = new MainPageItem(el);
    const mainPageElement = item.generateGroup(stateGame);
    return mainPageElement
}

const clickRender = (e) => {
    rating.innerHTML = '';
    main.innerHTML = '';
    stat.innerHTML = 'Statistics';
    const isTrain = JSON.parse(localStorage.getItem('isTrain'));
    const clickName = e.target.closest('.main-card') || e.target;
    main.append(playGame(isTrain));
    switch (clickName.name) {
        case 'actionSetA':
            actionSetA.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetA');
            break;
        case 'actionSetB':
            actionSetB.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetB');
            break;
        case 'actionSetC':
            actionSetС.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'actionSetC');
            break;
        case 'adjective':
            adjective.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'adjective');
            break;
        case 'animalSetA':
            animalSetA.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'animalSetA');
            break;
        case 'animalSetB':
            animalSetB.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'animalSetB');
            break;
        case 'clothes':
            clothes.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'clothes');
            break;
        case 'emotion':
            emotion.map((el) => {
                return main.append(renderCard(el, isTrain))
            });
            localStorage.setItem('activePage', 'emotion');
            break;

        default:
            break;
    }

    if (clickName.name === 'mainPage') {
        main.innerHTML = ''
        mainPages.map((el) => {
            return main.append(renderMainPageItem(el, isTrain))
        })
        localStorage.setItem('activePage', 'mainPage');
        sectionGroup = document.querySelectorAll('.section-group');
        sectionGroup.forEach((el) => { el.addEventListener('click', clickRender); })
    }
}

const init = () => {
    rating.innerHTML = '';
    main.innerHTML = '';
    stat.innerHTML = 'Statistics';
    const isTrain = JSON.parse(localStorage.getItem('isTrain'));
    const activePage = localStorage.getItem('activePage');
    main.append(playGame(isTrain));

    if (activePage === 'mainPage') {
        main.innerHTML = '';
        mainPages.map((el) => {
            return main.append(renderMainPageItem(el, isTrain))
        })
        sectionGroup = document.querySelectorAll('.section-group');
        sectionGroup.forEach((el) => { el.addEventListener('click', clickRender); })
    }

    if (activePage === 'actionSetA') {
        actionSetA.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'actionSetB') {
        actionSetB.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'actionSetC') {
        actionSetС.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'adjective') {
        adjective.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'animalSetA') {
        animalSetA.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'animalSetB') {
        animalSetB.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'clothes') {
        clothes.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
    if (activePage === 'emotion') {
        emotion.map((el) => {
            return main.append(renderCard(el, isTrain))
        });
    }
}

toggleSwitch.addEventListener('click', () => { init() })

const toggleBtn = document.getElementById('toggle-menu');
document.addEventListener('click', (e) => {
    let check = true
    if (e.target.closest('#toggle-menu')) {
        check = e.target.closest('#toggle-menu').className
    }
    if (!check) {
        toggleBtn.classList.add('on');
        appNavigation.classList.add('active');
    }
    if (check) {
        toggleBtn.classList.remove('on');
        appNavigation.classList.remove('active');
    }
})

navLinkBtn.forEach((el) => { el.addEventListener('click', clickRender); })

rating.addEventListener("DOMSubtreeModified", (e) => {
    if (e.target.textContent) {
        setTimeout(() => {
            const toggleSwitchBtn = document.querySelector('.toggle-button');
            localStorage.setItem('activePage', 'mainPage');
            localStorage.setItem('isTrain', 'true');
            init();
            sectionGroup.forEach((el) => { el.addEventListener('click', clickRender); })
            toggleSwitch.classList.toggle('toggle-on');
            toggleSwitchBtn.classList.toggle('green');
        }, 2500);
    };
});



stat.addEventListener('click', () => {
    stat.innerHTML = 'Statistics';
    stat.classList.add('activeStat');
    stat.append(statistics());
})


export default init