const navbar = document.querySelector('.navbar');
const themeToggle = document.getElementById('theme-toggle');

let lastScrollTop = 0;


window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-100px'; // hide
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('open');
});






function toggleAbout() {
  const panel = document.getElementById('aboutPanel');
  const overlay = document.getElementById('aboutOverlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('show');
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.dataset.group;
    const cards = document.querySelectorAll(`.${group}`);
    
    cards.forEach(card => {
      card.classList.toggle('hidden');
    });
  });
});