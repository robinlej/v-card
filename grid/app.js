const navHeader = document.querySelector('.nav-header');

document.querySelector('.hamburger-btn').addEventListener('click', (e) => {

    if (navHeader.classList.contains('active')) {
        navHeader.classList.remove('active');
    } else {
        navHeader.classList.add('active');
    }
});