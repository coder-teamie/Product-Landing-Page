// ** date **
const date = (document.querySelector('#date').innerHTML =
  new Date().getFullYear());

// ** toggle links **

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// ** smooth scroll **
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
const linksContainer = document.querySelector('.links-container');
const navbar = document.getElementById('nav-bar');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navbar.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + linksContainerHeight;
    }
    console.log(id);

    window.scrollTo({
      behavior: 'smooth',
      top: position,
    });

    links.classList.remove('show-links');
  });
});
