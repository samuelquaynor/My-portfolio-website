const navToggle = document.getElementById('collapse');  

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});