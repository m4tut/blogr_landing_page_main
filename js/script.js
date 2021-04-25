const hamburgerElem = document.querySelector('.hamburger');
const closeElem = document.querySelector('.close');
const navigationElem = document.querySelector('.navigation');
const navItemElem = document.querySelectorAll('.nav_item');

hamburgerElem.addEventListener('click', () => {
    if (!navigationElem.style.display) {
        navigationElem.style.display = 'flex';
    } else {
        navigationElem.style.display = '';
        navItemElem.forEach((item) => {
            item.classList.remove('nav_active');
        });
    }
});

navItemElem.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('nav_active')) {
            item.classList.remove('nav_active');
            remove;
        }

        navItemElem.forEach((item) => {
            item.classList.remove('nav_active');
        });

        item.classList.add('nav_active');
    });
});

closeElem.addEventListener('click', () => {
    navigationElem.style.display = '';
    navItemElem.forEach((item) => {
        item.classList.remove('nav_active');
    });
});
