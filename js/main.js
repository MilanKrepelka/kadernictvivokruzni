// Rok v patičce
document.getElementById('rok').textContent = new Date().getFullYear();

// Navbar — přidá třídu .scrolled po odscrollování
const nav = document.getElementById('hlavni-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Lightbox galerie
const lightboxModal = document.getElementById('lightbox');
if (lightboxModal) {
  const lightboxImg = document.getElementById('lightbox-img');
  const modal = new bootstrap.Modal(lightboxModal);

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      lightboxImg.src = item.dataset.src;
      lightboxImg.alt = item.querySelector('img').alt;
      modal.show();
    });
  });
}

// Zavření mobilního menu po kliknutí na odkaz
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('nav-menu');
    if (menu.classList.contains('show')) {
      toggler.click();
    }
  });
});
