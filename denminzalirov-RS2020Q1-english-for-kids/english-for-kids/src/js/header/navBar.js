const appNavigation = document.querySelector('.app-navigation');
const toggleSwitch = document.querySelector('.toggle');
const toggleSwitchBtn = document.querySelector('.toggle-button');
const navLinkBtn = document.querySelectorAll('.nav-link');


appNavigation.addEventListener("click", e => {
    if (e.target.className === "nav-link") {
        navLinkBtn.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
    }
});

toggleSwitch.addEventListener('click', (e) => {
    toggleSwitch.classList.toggle('toggle-on');
    toggleSwitchBtn.classList.toggle('green');

    if (e.target.parentElement.className.includes('toggle-on')) {
        localStorage.setItem('isTrain', false);
    } else {
        localStorage.setItem('isTrain', true);
    }
})
