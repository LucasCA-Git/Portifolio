const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

if (button && mobileNavbar) {
  button.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active');
  });
}

if (navbar) {
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  };

  let debounceTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(handleScroll, 10);
  });
}