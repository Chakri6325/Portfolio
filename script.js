// DARK MODE TOGGLE
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;
toggleBtn.addEventListener('click', () => { body.classList.toggle('light-mode'); });

// BACK TO TOP LOGIC
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
