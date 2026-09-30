const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

function toggleMenu(open) {
    menuBtn.classList.toggle('active', open);
    navList.classList.toggle('active', open);
    document.body.classList.toggle('lock', open);
}

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu(!navList.classList.contains('active'));
});

// menyudagi linkni bosganda menyu yopilsin
navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
});

// ekran kattalashganda menyu ochiq qolib ketmasin
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) toggleMenu(false);
});