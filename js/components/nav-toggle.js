import { navLinks } from '../selectors.js';
import { wait, asyncForEach } from '../utils.js';

export function closeNav(toggle, target) {
  if (target.id === 'nav') {
    navLinks.forEach(link => {
      link.classList.remove('transitioned');
    });
  }
  toggle.classList.add('nav-toggle-transition');
  toggle.classList.remove('nav-toggle-open');
  setTimeout(() => {
    toggle.classList.remove('nav-toggle-transition');
    toggle.querySelector('.middle').removeAttribute('style');
    target.classList.remove('open');
  }, 200)
}

export function openNav(toggle, target) {
  target.classList.add('open');
  toggle.classList.add('nav-toggle-transition');
  setTimeout(async function() {
    toggle.querySelector('.middle').style.display = 'none';
    toggle.classList.add('nav-toggle-open');
    toggle.classList.remove('nav-toggle-transition');
    if (target.id === 'nav') {
      asyncForEach(navLinks, async (num) => {
        await wait(50);
        num.classList.add('transitioned');
      })
    }
  }, 200)
}

export function handleNavToggle(e, toggle) {
  e.preventDefault();
  const selector = toggle.getAttribute('href');
  const target = document.querySelector(selector)
  if (toggle.classList.contains('nav-toggle-open')) {
    closeNav(toggle, target);
  } else {
    openNav(toggle, target);
  }
}

