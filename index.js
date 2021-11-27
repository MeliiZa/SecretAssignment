const navSlide = () => {
    const burger = document.querySelector ('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');

    //toggle Nav
    burger.addEventListener('click', () => {
        //Toggle for NavBar
        nav.classList.toggle('nav-active');
    //Animation for links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`;
            }
        });
    //Burger Transforms to X animation
        burger.classList.toggle('toggle-icon');
    });
}

navSlide();